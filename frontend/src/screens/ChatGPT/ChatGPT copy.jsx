import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  useMediaQuery,
  useTheme,
  TextField,
  Button,
} from "@mui/material";
import axios from "axios";
import Editor from "@monaco-editor/react";

export const ChatGPT = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [prompt, setPrompt] = useState("");
  const [questionData, setQuestionData] = useState(null);

  // This function formats the question data into a string for the editor
  const formatQuestionData = (data) => {
    // Check if data or data.methods is not defined and return a default comment
    if (!data || !data.methods) return "// some comment";
  
    let defaultValue = `// ${data.class_name}\n// ${data.description}\n`;
    // Safely iterate over methods since we've checked it's defined
    data.methods.forEach((method) => {
      defaultValue += `
  // Method: ${method.method_name}
  // Return type: ${method.return_type}
  // Parameters: ${method.parameters.join(", ")}
  // Description: ${method.description}\n`;
    });
    return defaultValue;
  };
  

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8000/chat", { prompt })
      .then((res) => {
        // Assuming res.data is the JSON object we need
        setQuestionData(res.data); // Save the entire response
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };

  function handleEditorChange(value, event) {
    console.log("here is the current model value:", value);
  }

  // Using useEffect to update the editor's default value when questionData changes
  useEffect(() => {
    const editorValue = formatQuestionData(questionData);
    // If your editor component does not update with the new defaultValue, you may need to directly
    // manipulate the editor instance or key the component to force re-rendering with new props
  }, [questionData]);

  return (
    <Box className="contact-us-container">
      <Grid
        container
        spacing={isMobile ? 2 : 5}
        alignItems="center"
        justifyContent="space-between"
      >
        <Grid item xs={12} md={5}>
          <Typography variant="h6" style={{ color: "white" }}>
            Chat with GPT
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Your Prompt"
              variant="outlined"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              margin="normal"
              InputLabelProps={{ style: { color: "white" } }}
              inputProps={{ style: { color: "white" } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "white" },
                  "&:hover fieldset": { borderColor: "white" },
                  "&.Mui-focused fieldset": { borderColor: "white" },
                },
              }}
            />
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </form>

          {questionData && (
            <Box style={{ padding: 20 }}>
              {/* Display the formatted question data */}
              <Typography variant="body1" style={{ color: "white" }}>
                {formatQuestionData(questionData)}
              </Typography>
            </Box>
          )}
        </Grid>
        <Grid item xs={12} md={7}>
          <Editor
            height="50vh"
            theme="vs-dark"
            defaultLanguage="java"
            // Here, we directly set the formatted question data as the default value
            defaultValue={formatQuestionData(questionData)}
            onChange={handleEditorChange}
            // Keying the Editor on questionData to force re-render on update
            key={JSON.stringify(questionData)}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ChatGPT;
