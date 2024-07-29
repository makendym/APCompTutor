import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { ButtonBase } from '@mui/material';

// project imports
import config from '../../../config';
import { MENU_OPEN } from '../../../store/actions';
import { darkTransparentLogo } from '../../../assets'

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => {
  const defaultId = useSelector((state) => state.customization.defaultId);
  const dispatch = useDispatch();
  return (
    <ButtonBase
      disableRipple
      onClick={() => dispatch({ type: MENU_OPEN, id: defaultId })}
      component={Link}
      to={config.defaultPath}
      sx={{
        display: 'flex', // Use flexbox to center the image
        justifyContent: 'center', // Center horizontally
        alignItems: 'center', // Center vertically
        height: '100%', // Maintain full height
        width: '100%', // Maintain full width
      }}
    >
      <img
        src={darkTransparentLogo}
        alt="logo"
        style={{
          maxWidth: '80px', // Adjust the logo's max width as desired
          maxHeight: '80px', // Adjust the logo's max height as desired
          width: 'auto', // Maintain aspect ratio
          height: 'auto', // Maintain aspect ratio
        }}
      />
    </ButtonBase>
  );
};

export default LogoSection;
