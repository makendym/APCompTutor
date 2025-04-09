import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  Divider,
} from "@mui/material";
import axios from "axios";
import Editor from "@monaco-editor/react";
import { ResizableBox } from "react-resizable";
import "./style.css";
import "./resizable.css";

export const ChatGPT = () => {
  const [prompt, setPrompt] = useState("");
  const [questionData, setQuestionData] = useState(null);
  const [editorKey, setEditorKey] = useState(Date.now());
  const [leftWidth, setLeftWidth] = useState(400);
  const [editorHeight, setEditorHeight] = useState(400);

  useEffect(() => {
    if (questionData) {
      setEditorKey(Date.now());
    }
  }, [questionData]);

  const formatQuestionData = (data) => {
    if (!data || !data.methods) return "// some comment";

    let defaultValue = `// Use this section to answer the question\n`;
    data.methods.forEach((method) => {
      defaultValue += `
  // Method: ${method.method_name}
  // Return type: ${method.return_type}
  // Parameters: ${method.parameters.join(", ")}\n\n
  public ${method.return_type} ${method.method_name}(${method.parameters.join(
        ", "
      )}) {\n

  }\n
  `;
    });
    return defaultValue;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/chat", { prompt });
      if (res.data && res.data.parsedResponse) {
        setQuestionData(res.data.parsedResponse);
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <Box className="contact-us-container">
      <Box
        sx={{
          marginTop: "60px",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box style={{ height: "70vh", width: "100%", display: "flex", gap: "10px" }}>
          <ResizableBox
            width={leftWidth}
            height={Infinity}
            minConstraints={[300, Infinity]}
            maxConstraints={[1200, Infinity]}
            onResizeStop={(e, data) => setLeftWidth(data.size.width)}
            axis="x"
            handle={
              <div className="react-resizable-handle react-resizable-handle-e" />
            }
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              position: "relative",
              flexShrink: 0,
            }}
          >
            <Paper
              style={{
                padding: 0,
                backgroundColor: "#3c3c3c",
                border: "1px solid #ffffff",
                borderRadius: "8px",
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  padding: "8px 16px",
                  backgroundColor: "#282c34",
                  borderRadius: "8px 8px 0 0",
                  borderBottom: "1px solid #ffffff",
                }}
              >
                <Typography variant="h6" style={{ color: "white" }}>
                  Description
                </Typography>
              </Box>
              <Box style={{ padding: 20, overflowY: "auto", flex: 1 }}>
                <Typography variant="h6" style={{ color: "white" }}>
                  {questionData?.class_name ?? "No classname available..."}
                </Typography>
                <Typography variant="subtitle1" style={{ color: "white" }}>
                  {questionData?.description ?? "No description available"}
                </Typography>
                <Divider style={{ backgroundColor: "white", margin: "10px 0" }} />
                <Box>
                  {questionData?.methods?.map((method, index) => (
                    <Box key={index} mt={2}>
                      <Typography variant="h6" style={{ color: "white" }}>
                        {method.method_name}
                      </Typography>
                      <Typography style={{ color: "white" }}>
                        Return type: {method.return_type}
                      </Typography>
                      <Typography style={{ color: "white" }}>
                        Parameters: {method.parameters.join(", ")}
                      </Typography>
                      <Typography style={{ color: "white" }}>
                        Description: {method.description}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Paper>
          </ResizableBox>

          <Box style={{ flex: 1, display: "flex", flexDirection: "column", height: "100%", position: "relative", minWidth: "300px" }}>
            <ResizableBox
              width={Infinity}
              height={editorHeight}
              minConstraints={[Infinity, 200]}
              maxConstraints={[Infinity, 600]}
              onResizeStop={(e, data) => setEditorHeight(data.size.height)}
              axis="y"
              handle={
                <div className="react-resizable-handle react-resizable-handle-s" />
              }
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                position: "relative",
              }}
            >
              <Paper
                style={{
                  height: "100%",
                  border: "1px solid #ffffff",
                  borderRadius: "8px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    padding: "8px 16px ",
                    backgroundColor: "#282c34",
                    borderBottom: "1px solid #ffffff",
                  }}
                >
                  <Typography variant="h6" style={{ color: "white" }}>
                    Code
                  </Typography>
                </Box>
                <Editor
                  key={editorKey}
                  height="100%"
                  theme="vs-dark"
                  defaultLanguage="java"
                  defaultValue={
                    questionData
                      ? formatQuestionData(questionData)
                      : "// some comment"
                  }
                />
              </Paper>
            </ResizableBox>

            <Box style={{ width: "100%", marginTop: "10px", flex: 1 }}>
              <Paper
                style={{
                  padding: 20,
                  backgroundColor: "#3c3c3c",
                  border: "1px solid #ffffff",
                  borderRadius: "8px",
                  width: "100%",
                  height: "100%",
                }}
              >
                <Typography variant="h6" style={{ color: "white" }}>
                  Search Bar
                </Typography>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} sm={8}>
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
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{
                          backgroundColor: "#3A9E3E",
                          "&:hover": {
                            backgroundColor: "#357a38",
                          },
                          borderRadius: "9px",
                          color: "#ffffff",
                          padding: "15px",
                          fontFamily: '"Poppins", Helvetica, sans-serif',
                          fontSize: "16px",
                          fontWeight: 700,
                          textTransform: "none",
                          boxShadow: "none",
                          transition: "background-color 0.3s ease-in-out",
                          ":hover": {
                            bgcolor: "#357a38",
                          },
                        }}
                      >
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Paper>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ChatGPT;
