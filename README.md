# Custom Silly Dev Themes

Create/Find and use custom CSS on Silly Dev.

## How to use: 
- Install Tampermonkey (If you haven't yet)
- Open Tampermonkey (Extensions Button (top left of screen) > Tampermonkey)
- Click on the "**create new script**" button.
- Paste the [CSS customizer](https://github.com/itsprobablyjackson/customsillydevthemes/blob/main/css.js) script into the new script you just created.

## Config:

If you are just pasting some CSS, set `local` to `true` and paste your css in `source`,
Otherwise, if you are getting your CSS from Github, etc. set `local` to `false` and paste the link to the CSS in `source`. 

### CSS from online:
```json
{
    local: false, 
    source: `https://example.com/yourcss.css`
}
```

### CSS locally:
```json
{
    local: true, 
    source: `body {background-color: white;}`
}
```