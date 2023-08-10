# Stash Theme Darkonite by Dankonite
Based on the work of [elkorol's theme switcher plugin](https://github.com/elkorol/Stash-App-Theme-Switch-Plugin)
Adds a button that shows a menu, allowing you to change CSS Options and enable/disable various CSS snippets for Stash App. Not all of the CSS is made by myself, see elkorols version for credits if I removed them, idk if I did or not.

unlike elkorols version, I added the ability for css snippets to be enabled by default instead of requiring lots of enabling. This way I can deliver my vision of the theme, while adding the option for you the user to disable parts. Im trying to make *the* most customizable theme 

Works by saving css snippets to browser local storage, some are enabled by default some arent. the ones that are, are loaded on the first page load, reload atleast twice after enabling this theme (plugin).

## Important
If you decide to poke inside the code and change parts of this you need to clear your browsers local storage for them to take effect. Its kinda complicated, and Im not sure I can explain it properly, but just know if you change css you *need* to clear your local storage for the site for it to take effect.

Clicking on any radio/checkbox toggles the CSS, saves the CSS content of the Stylesheet in the browsers local storage, with an applied flag, either true or false which allows the script upon page navigation and refresh to apply previously selected stylesheets

Under Change Order of Menu Bar, you can drag the elements to reorder the main menu and upon dropping it will generate the required CSS. It should work on touchscreens also, tested on Chrome IOS by elkorol on his version, cant personally speak for every device/browser.

## Other Requirements

This plugin requires the feature of Stash - Custom Served Folders, to serve the stylesheets to stash. More here > [Advanced Configuration Options](https://github.com/stashapp/stash/wiki/Advanced-Configuration-Options), and here, [Add custom served folders](https://github.com/stashapp/stash/pull/620)

## Usage

1. Copy repository into Stash plugins folder.
2. Stop Stash from running and find and open config.yml
3. Enter or add the relevent parts below, into config.yml

```yaml
custom_served_folders:
  /themeswitch: [Path to where you copied the repository plugin]\assets
```

*I.E.*

```yaml
custom_served_folders:
  /themeswitch: C:\Stash\plugins\Stash-App-Theme-Switch-Plugin\assets
```

4. Open theme.js and edit STASHURL variable at the top to suit your configuration. If leaving it as localhost and accessing Stash on a third party device on your network via IP address, it will not work unless you set the variable to that IP address or if you have a custom domain/host setup
5. Start Stash, navigate to Settings > Plugins > Press Reload Plugins and refresh
6. The Theme / CSS Switcher button should now be in the top right of the menu bar, if its not you didnt do something right.

## Credit
Based on the work of [elkorol's theme switcher plugin](https://github.com/elkorol/Stash-App-Theme-Switch-Plugin)
The CSS code used is provided by [Stash Community Themes](https://docs.stashapp.cc/user-interface-ui/themes) and [Stash Community Custom CSS Snippets](https://docs.stashapp.cc/user-interface-ui/custom-css-snippets).
