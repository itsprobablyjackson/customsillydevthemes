# Custom Silly Dev Themes

Create/Find and use custom CSS on Silly Dev.

## How to use: 
- Install Tampermonkey (If you haven't yet)
- Open Tampermonkey (Extensions Button (top left of screen) > Tampermonkey)
- Click on the "**create new script**" button.
- Paste the [CSS customizer](https://github.com/itsprobablyjackson/customsillydevthemes/blob/main/css.js) script into the new script you just created.

## Config:

If you are using local CSS, set `local` to `true` and paste your css in `source`.

### CSS from online:
If you are getting your CSS from Github, etc. set `local` to `false` and paste the link to the CSS in `source`. 
```json
{
    local: false, 
    source: `https://example.com/yourcss.css`
}
```

### CSS locally:
If you are using local CSS, set `local` to `true` and paste your css in `source`.
```json
{
    local: true, 
    source: `body {background-color: white;}`
}
```
Feel free to create your own themes and share them. If you want, fork the repo and send a pull request and it will get reviewed.