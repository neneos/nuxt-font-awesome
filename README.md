# nuxt-font-awesome
A font-awesome module for nuxt including following fonts:

fontawesome-free-regular
fontawesome-free-brands
fontawesome-free-solid

and vue-awesome


# Installation

## npm
npm i @neneos/nuxt-font-awesome

## yarn
yarn add @neneos/nuxt-font-awesome

# Hooking it up

In the nuxt.config file add the module in the modules section

~~~~
module.exports = {
  ...
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@neneos/nuxt-font-aweseome'
  ]
  ...
}
~~~~

#using it

in the template part of your vue file just include the following tags.


~~~~
<font-awesome-icon icon="envelope" />
<font-awesome-icon  :icon="['fab', 'facebook']"  /> 
~~~~
                                       