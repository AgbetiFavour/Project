import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import { StepsStyleConfig as Steps } from 'chakra-ui-steps';

//chris work
// const CustomSteps = {
//   ...Steps,
//   baseStyle: (props) => {
//     return {
//       ...Steps.baseStyle(props),
//       labelContainer: {
//         ...Steps.baseStyle(props).labelContainer,
//         fontWeight: "bold",
//         _activeStep: {
//           ...Steps.baseStyle(props).labelContainer._activeStep,
//           color: "#EA6F06",
//         },
//         _checked: {
//           ...Steps.baseStyle(props).labelContainer._checked,
//           color: "#2AC769",
//         },
//       },
//       label: {
//         ...Steps.baseStyle(props).label,
//         fontWeight: "bold",
//         color: "white",
//       },

//       stepIconContainer: {
//         ...Steps.baseStyle(props).stepIconContainer,
//         color: "white",
//         _activeStep: {
//           ...Steps.baseStyle(props).stepIconContainer._activeStep,
//           bg: "#EA6F06",
//           borderColor: "#EA6F06",
//           color: "white ",
//         },
//         _checked: {
//           ...Steps.baseStyle(props).stepIconContainer._checked,
//           bg: "#2AC769",
//           borderColor: "#2AC769",
//         },
//       },
//       description: {
//         ...Steps.baseStyle(props).description,
//         "font-weight": "bold !important",
//         maxWidth: "6rem",
//         marginTop: ".3rem",

//         _activeStep: {
//           ...Steps.baseStyle(props).description._activeStep,
//           "& > span": { color: "#EA6F06" },
//         },
//         _checked: {
//           ...Steps.baseStyle(props).description._checked,
//           color: "#2AC769 !important",
//         },
//       },
//     };
//   },
// };
const theme = extendTheme({
  //chris work
  // styles: {
  //   global: (props) => ({
  //     body: {
  //       fontFamily: "body",
  //       // color: mode("gray.800", "gray.800")(props),

  //       // bg: mode("red", "gray.800")(props),
  //       // lineHeight: "base",
  //     },
  //     select: {
  //       bg: mode("#fff", "#fff")(props),
  //     },
  //   }),
  // },
  // components: {
  //   Steps: CustomSteps,
  // },

  // used theme do not delete
  styles: {
    global: {
      h1: {
        fontSize: '20px',
        fontWeight: 700,
        color: 'rgba(37, 40, 43, 1)',
      },
      h2: {
        fontSize: '18px',
        fontWeight: 600,
        color: 'rgba(37, 40, 43, 1)',
      },
      h3: {
        fontSize: '16px',
        fontWeight: 600,
      },
      body: {
        fontSize: '14px',
        fontWeight: 400,
        color: ' rgba(37, 40, 43, 1)',
      },
    },
  },
  colors: {
    blue: 'rgba(25, 165, 176, 1)',
    orange: 'rgba(234, 111, 6, 1)',
    bgGlobal: '#E5E5E5',
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
