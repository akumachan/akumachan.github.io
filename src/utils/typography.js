import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"

Wordpress2016.headerFontFamily = ['M PLUS 1p', 'Roboto', 'serif']
Wordpress2016.bodyFontFamily = ['M PLUS 1p', 'Roboto', 'serif']
delete Wordpress2016.googleFonts
Wordpress2016.googleFonts = [
  {
    name: 'M PLUS 1p',
    styles: ['400'],
  },
  {
    name: 'Kosugi Maru',
    styles: []
  },
]

Wordpress2016.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    h1: {
      fontFamily: ["Kosugi Maru", "Roboto", "serif"].join(","),
    },
  }
}

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
