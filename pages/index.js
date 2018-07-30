import React from 'react';
import {
  withStyles,
  Arwes,
  Content,
  Words,
  Image,
  Button,
  Frame,
  Line,
  List,
  Loading,
  createLoader,
  createResponsive,
  Logo,
  utils
} from 'arwes';
import Camera from './Camera'
import Webcam from 'react-webcam';
import ImageLoader from 'react-image-file';
import ReactDOM from 'react-dom';

import withTemplate from '../site/withTemplate';
import { Link, TextIcon } from '../site/components';


const azure = require('azure-storage');
var blobService = azure.createBlobService("DefaultEndpointsProtocol=https;AccountName=facewcu;AccountKey=6cPTAUfLiGlGkinaCCfO6lX396BUFTdckOR7/4IAs8FG35pTS4sGNUlCxwsUibUYNjEQFlbHZc7+mhkvlLXf/g==;EndpointSuffix=core.windows.net");


blobService.createContainerIfNotExists('wcuphoto', {
  publicAccessLevel: 'blob'
}, function(error, result, response) {
  if (!error) {
    console.log(result);
    // if result = true, container was created.
    // if result = false, container already existed.
  }
});


const styles = theme => ({
  root: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    margin: 'auto',
    padding: theme.padding,
    textAlign: 'center',
    maxWidth: 700,
    '& h1': {
      margin: 0,
      paddingTop: 5,
      fontSize: 32,
      lineHeight: '1',
    },
    '& p': {
      margin: 0,
    },
    '& $detail + $detail': {
      marginTop: theme.margin / 2,
    },
  },
  section: {
    marginBottom: theme.margin / 1.5,
    '&:last-child': {
      margin: 0,
    },
  },
  profile: {
    margin: 0,
    display: 'inline-block',
    width: 150,
  },
  detail: {
    display: 'block',
  },
  textIcon: {
    textAlign: 'center',
  },
  button: {
    width: '50%',
  },
  // medium size +
  [`@media screen and (min-width: ${theme.responsive.small + 1}px)`]: {
    content: {
      '& $detail + $detail': {
        margin: [0, 0, 0, theme.margin / 2],
      },
    },
    detail: {
      display: 'inline-block',
    },
    button: {
      width: 'auto',
    },
  },
});

class WebcamCapture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {captured:false};
    let imageSrc;
    this.fetchFace = this.fetchFace.bind(this);
    this.capture = this.capture.bind(this);
  }

    fetchFace = () => {
    return (dispatch) => {
      let screenshot = this.webcam.getScreenshot();
      dispatch(requestFace(screenshot))
      let data = screenshot.toString();
      let str = data.substring(data.indexOf(",") + 1);
  
      var header = new Headers({
          'Content-Type' : 'application/octet-stream',
          'Ocp-Apim-Subscription-Key' : '49101dddd19e415ba9970d2d8b3b3172'
      });
      var initObject = {
          method : 'post',
          body :  new Buffer(str, 'base64'),
          headers: header
      };
      var url = 'https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect' + '?returnFaceId=false' +
          '&returnFaceLandmarks=false' + '&returnFaceAttributes=age,gender,facialHair,glasses,emotion,makeup,hair,accessories,exposure';
      fetch(url, initObject)
      .then(response => response.json())
      .then(response => {
        dispatch(receiveFace(screenshot, response))
        console.log(response)
      })
    }
  }

  setRef = (webcam) => {
    this.webcam = webcam;
  }

  capture = () => {
    this.imageSrc = this.webcam.getScreenshot();

    this.setState({captured:true});
    let data = this.imageSrc.toString();

    var matches = data.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
    var type = matches[1];
    var buffer = new Buffer(matches[2], 'base64');
    var timestamp = Date.now();
    console.log(timestamp);
    var imageName = "profile-pic-"+timestamp+".jpg";

    blobService.createBlockBlobFromText('wcuphoto', imageName, buffer, {contentType:type}, function(error, result, response) {
            if (error) {
                console.log(error);
            }else{
             console.log(result)
            }
        });

    let str = data.substring(data.indexOf(",") + 1);

    var header = new Headers({
        'Content-Type' : 'application/octet-stream',
        'Ocp-Apim-Subscription-Key' : '99e6e884fe5344a8a5582053ac88a60f'
    });
    var initObject = {
        method : 'post',
        body :  new Buffer(str, 'base64'),
        headers: header
    };
    var url = 'https://eastus.api.cognitive.microsoft.com/face/v1.0/detect' + '?returnFaceId=false' +
        '&returnFaceLandmarks=false' + '&returnFaceAttributes=age,gender,facialHair,glasses,emotion,makeup,hair,accessories,exposure';
    fetch(url, initObject)
    .then(response => response.json())
    .then(response => {
      console.log(response)
      var gender = response[0]['faceAttributes']['gender'];
      var age = response[0]['faceAttributes']['age'];
      var glasses = response[0]['faceAttributes']['glasses'];
      var anger = response[0]['faceAttributes']['emotion']['anger'];
      var contempt = response[0]['faceAttributes']['emotion']['contempt'];
      var disgust = response[0]['faceAttributes']['emotion']['disgust'];
      var fear = response[0]['faceAttributes']['emotion']['fear'];
      var happiness = response[0]['faceAttributes']['emotion']['happiness'];
      var neutral = response[0]['faceAttributes']['emotion']['neutral'];
      var sadness = response[0]['faceAttributes']['emotion']['sadness'];
      var surprise = response[0]['faceAttributes']['emotion']['surprise'];
      console.log(response[0]['faceAttributes']['gender'])
      console.log(response[0]['faceAttributes']['age'])
      const emotionList =
        React.createElement('div', {},
          React.createElement('ul', {},
            [
              React.createElement('li', {}, "anger: " + anger * 100 + "%"),
              React.createElement('li', {}, "contempt: " + contempt * 100 + "%"),
              React.createElement('li', {}, "disgust: " + disgust * 100 + "%"),
              React.createElement('li', {}, "fear: " + fear * 100 + "%"),
              React.createElement('li', {}, "happiness: " + happiness * 100 + "%"),
              React.createElement('li', {}, "neutral: " + neutral * 100 + "%"),
              React.createElement('li', {}, "sadness: " + sadness * 100 + "%"),
              React.createElement('li', {}, "surprise: " + surprise * 100 + "%")
            ]
          )
  );
  const makeupInfo = 
       React.createElement('div', {},
        React.createElement('ul', {},
      [
        React.createElement('li', {}, "Eye Makeup: " + response[0]['faceAttributes']['makeup']['eyeMakeup']),
        React.createElement('li', {}, "Lip Makeup: " + response[0]['faceAttributes']['makeup']['lipMakeup']),
      ]
    )
);
      var genderDisplay = "Gender: "+ gender;
      var ageDisplay = "Age: "+ age;
      var glassesInfo = "Glasses: " + glasses;
      var emotionInfo = "anger: " + anger * 100 + "%";
      var contemptInfo = "Contempt: " + contempt * 100 + "%";
      ReactDOM.render(genderDisplay, document.getElementById('gender'));
      ReactDOM.render(ageDisplay, document.getElementById('age'));
      ReactDOM.render(glassesInfo, document.getElementById('glassess'));
      ReactDOM.render(makeupInfo, document.getElementById('makeupInfo'));
      ReactDOM.hydrate(emotionList, document.getElementById('emotion'));

    })
  };

 

  render() {
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: 'user',
    };
    let button1;
    {/*
    if (this.state.captured & this.imageSrc != undefined) {
      console.log(this.imageSrc);
      button1 = <img src={this.imageSrc} alt='screenshot' height='80' />;
    }
  */ 
}
    return (
      <div>
        <Frame
                        show={this.state.show}
                        animate={true}
                        level={2}
                        corners={1}
                        layer='primary'
                    >
        <Webcam
          audio={false}
          height={250}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={350}
          videoConstraints={videoConstraints}
        />
        </Frame>
        <div  style={{ margin: '4px 4px, 4px, 4px', align:"left", fontSize: '18px',  height:'10px'}}></div>
        <Button onClick={this.capture} animate>Scan</Button>
        
      </div>
    );
  }
}






class Index extends React.Component {

  constructor () {
    super(...arguments);
    this.state = {
      show: false,
      loaded: false,
    };

    this.profile = '/static/img/profile.jpg';

    this.loader = createLoader();
    this.responsive = createResponsive({
      getTheme: () => this.props.theme
    });
  }

  componentDidMount () {
    this.startLoading();
  }

  render () {
    const { show, loaded } = this.state;

    const { classes, resources } = this.props;
    const { background, pattern } = resources;

    return (
      <div>
        <Loading
          full
          animate
          show={!show && !loaded}
          animation={{
            unmountOnExit: true
          }}
        />
        
        <Arwes
          animate
          show={show}
          showResources={show}
          background={background}
          pattern={pattern}
        >
        

          {anim => (
          <Content className={classes.root}>

            <div className={classes.content}>

              <div className={classes.section} style={{ margin: '0px 4px, 4px, 4px', align:"left", fontSize: '18px' }}>
              <WebcamCapture className={classes.profile}  animate
                  show={anim.entered}/>

               
         
          
              </div>
              
              {/* <div className={classes.section}>
                <h1><Words animate show={anim.entered}>
                  Si Chen
                </Words></h1>
              </div> 
             <Image
                  className={classes.profile}
                  animate
                  show={anim.entered}
                  resources={this.profile}
                />*/}

<h3><Words animate show={anim.entered}>User Profile</Words></h3>

              <Frame
                        show={this.state.show}
                        animate={true}
                        level={2}
                        corners={1}
                        layer='primary'
                    >
                        <div style={{ padding: '0px 0px', align:"left", fontSize: '18px' }}>
                        <List node='ul'>
                        
                <div id='age' animate show={anim.entering}></div>
                <div id='gender' animate show={anim.entering}></div>
                <div id="glassess"></div>
                <div id="makeupInfo"></div>

            </List>
                        </div>
                        
                    </Frame>
                  
                    {/*
              <div className={classes.section}>
                <p><Words animate show={anim.entered}>
                  Software engineering autodidact. Enthusiast, JavaScript dev,
                  Sci-Fi and nature fan. Making the world a better place through
                  lines of code.
                </Words></p>
                

              </div>
                    */}

                    
                    <Line animate />

                                  <h3><Words animate>Emotion Analysis</Words></h3>
                                  <Frame
                        show={this.state.show}
                        animate={true}
                        level={2}
                        corners={1}
                        layer='primary'
                    >
                    
                    <div id='emotion' animate show={anim.entering} style={{ padding: '10px 10px',align:"left", fontSize: '18px' }}></div>
               
            
                    </Frame>

                                  <Line animate />

              <div className={classes.section}>
              <Link className={classes.detail} href='http://www.quake0day.com/' target='_blank' onLink={this.onLink}>
                <TextIcon className={classes.textIcon} show={anim.entered} icon='face'>quake0day</TextIcon>
                </Link>
                <Link className={classes.detail} href='#' onLink={this.onLink}>
                  <TextIcon className={classes.textIcon} show={anim.entered} icon='code-brackets'>West Chester University</TextIcon>
                </Link>
                <Link className={classes.detail} href='#' target='_blank' onLink={this.onLink}>
                <Logo animate size={20} /> Computer Science 
                </Link>
              </div>

              <div className={classes.section}>
                <Link className={classes.detail} href='#' onLink={this.onLink}>
                  <Button className={classes.button} animate show={anim.entered}>
                    {anim2 => <Words animate show={anim2.entered}>Projects</Words>}
                  </Button>
                </Link>
                <Link className={classes.detail} href='#' target='' onLink={this.onLink}>
                  <Button className={classes.button} animate show={anim.entered}>
                    {anim2 => <Words animate show={anim2.entered}>APP Download</Words>}
                  </Button>
                </Link>
                <Link className={classes.detail} href='https://github.com/quake0day' target='github' onLink={this.onLink}>
                  <Button className={classes.button} animate show={anim.entered}>
                    {anim2 => <Words animate show={anim2.entered}>GitHub</Words>}
                  </Button>
                </Link>
                <Link className={classes.detail} href='https://cs.wcupa.edu/' target='twitter' onLink={this.onLink}>
                  <Button className={classes.button} animate show={anim.entered}>
                    {anim2 => <Words animate show={anim2.entered}>Website</Words>}
                  </Button>
                </Link>
              </div>

            </div>

          </Content>
          )}
        </Arwes>
      </div>
    );
  }

  startLoading () {
    const responsive = this.responsive.get();
    const background = utils.getResponsiveResource(this.props.resources.background, responsive);

    this.loader.load({ images: [background, this.profile] }, { timeout: 5 * 1000 }).
      then(() => {}, () => {}).
      then(() => this.setState({ show: true, loaded: true }));
  }

  onLink = () => {
    this.setState({ show: false });
  }
}

export default withTemplate(withStyles(styles)(Index));
