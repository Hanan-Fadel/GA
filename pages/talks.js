import React from 'react';
import Router from 'next/router';
import * as arwes from 'arwes';
import { withStyles, ThemeProvider, createTheme, Arwes } from 'arwes';
import createSpectacleThemeScreen from 'spectacle/lib/themes/default/screen';
import createSpectacleThemePrint from 'spectacle/lib/themes/default/print';

import { projects, talks } from '../site/settings';
import createAppTheme from '../site/createAppTheme';
import withTemplate from '../site/withTemplate';

let spectacle, Deck, Slide;

const styles = () => ({
  '@global': {
    'div.spectacle-slide': {
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
    },
  },
  root: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden',
  },
  codeBlock: {
    margin: 0,
    maxHeight: 700,
  },
});

class Talks extends React.Component {

  constructor () {
    super(...arguments);

    this.state = {
      arwesTheme: {},
      spectacleTheme: null,
      animLvl1: false,
    };
  }

  componentDidMount () {
    this.defineArwesTheme();
    this.defineSpectacleTheme();
    this.importSpectacle();

    const { talkKey } = this.props.url.query;
    const project = projects.find(item => item.key === talkKey);
    const talk = project && talks.find(item => item.id === project.talkId);

    if (project && talk) {
      this.setState({ animLvl1: true });
    } else {
      Router.push('/projects');
    }
  }

  render () {
    const { talkKey } = this.props.url.query;
    const { classes } = this.props;

    const { arwesTheme, spectacleTheme, animLvl1 } = this.state;

    const project = projects.find(item => item.key === talkKey);
    const talk = project && talks.find(item => item.id === project.talkId);

    return (
      <ThemeProvider theme={arwesTheme}>
        <Arwes
          animate
          show={animLvl1 && !!talk}
          puffsProps={{ animate: false }}
        >
          <div className={classes.root}>
            {animLvl1 && (
            <Deck progress='bar' theme={spectacleTheme} {...talk.deck}>

              {(talk.slides || []).map((slide, index) => (
              <Slide key={index} {...slide.props}>
                {(slide.children || []).map((child, index2) => (
                  this.createElement(child, `S${index}C${index2}`)
                ))}
              </Slide>
              ))}

            </Deck>
            )}
          </div>
        </Arwes>
      </ThemeProvider>
    );
  }

  /**
   * Conditional importing in the client-side. due to problems in server-side.
   */
  importSpectacle () {
    spectacle = require('spectacle');
    Deck = spectacle.Deck;
    Slide = spectacle.Slide;
  }

  /**
   * Create list of dynamic React components for the presentation.
   * @param  {Object[]} elements - Array of components definitions.
   * @param  {String} key - Identifier.
   * @return {React.Component[]}
   */
  createElements (elements, key) {
    return elements.map((item, index) => this.createElement(item, `${key}${index}`));
  }

  /**
   * Create a dynamic React component for the presentation.
   * @param  {Object|String} opts - The React component properties.
   * @param  {String} key - Identifier.
   * @return {React.Component}
   */
  createElement (opts, key) {
    const { classes } = this.props;

    if (Array.isArray(opts)) {
      return this.createElements(opts, key);
    }

    if (typeof opts === 'string') {
      return <arwes.Words animate>{opts}</arwes.Words>;
    }

    const { element, props, children } = opts;

    switch (element) {
      case 'Image': return <arwes.Image key={key} animate {...props} />;
      case 'ImagePlain': return (
        <arwes.Appear key={key} animate>
          <spectacle.Image {...props} />
        </arwes.Appear>
      );
      case 'Code': return (
        <arwes.Code
          className={classes.codeBlock}
          key={key}
          animate
          {...props}
        >
          {children}
        </arwes.Code>
      );

      // General content components.
      case 'Heading':
      case 'Paragraph':
      case 'Blockquote':
      case 'Link':
      case 'List': {
        const SelectedElement = arwes[element];
        return (
          <SelectedElement key={key} {...props}>
            {this.createElement(children)}
          </SelectedElement>
        );
      }

      // A built-in component.
      default: return React.createElement(
        element,
        { key, ...props },
        this.createElement(children)
      );
    }
  }

  defineArwesTheme () {
    const arwesTheme = createTheme(createAppTheme({
      typography: {
        headerSizes: {
          h1: 56,
          h2: 46,
          h3: 42,
          h4: 36,
          h5: 28,
          h6: 24,
        },
        fontSize: 36,
      },
      code: {
        fontSize: 26,
      },
    }));

    this.setState({ arwesTheme });
  }

  defineSpectacleTheme () {
    const { theme } = this.props;

    const fonts = {
      primary: theme.background.primary.level0,
      secondary: theme.color.primary.base,
      tertiary: theme.color.header.base,
      quarternary: theme.color.primary.dark,
    };
    const colors = {
      primary: theme.typography.fontFamily,
      secondary: theme.typography.headerFontFamily,
      tertiary: theme.code.fontFamily,
    };
    const spectacleTheme = {
      screen: createSpectacleThemeScreen(fonts, colors),
      print: createSpectacleThemePrint(),
    };

    spectacleTheme.screen = {
      ...spectacleTheme.screen,
      global: {
        body: {},
        '_:-moz-tree-row(hover), .spectacle-deck': {
          perspective: '1000px'
        },
        '_:-moz-tree-row(hover), ul .appear': {
          display: 'inline'
        },
      },
      components: {
        ...spectacleTheme.screen.components,
        image: {
          display: 'block',
          margin: '0 auto 20px',
        },
      },
    };

    this.setState({ spectacleTheme });
  }
}

export default withTemplate(withStyles(styles)(Talks));
