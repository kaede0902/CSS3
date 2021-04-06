# CSS CARDS DESIGN
## HTML class
```
cards
    image
    title
    des
        btn
```
## css
### cards
set `width:20%` to restrict every cards width.  
set BG to clear the border of `cards`.  
`boder-radius:15px` to look cute.  
`margin:40px` to space of each cards.  
`box-shadow: 2px 2px 10px #000` to look like real cards.  
This is the most important.  
`float: left` to align cards from left to right, 
NOT top to down as default.  
```
.cards:hover {
    box-shadow: 10px 10px 50px #000;
}
```
to clear what is selected now.  
### image
First, need 
```
.image img {

}
```
to select the attribute.  
`width: 100%` to use full width of the card.  
if the img is not enough, the img will be expand.  
### title
align center and fontsize bigger.
### des
align center, padding 4px.
### btn
30px `margin-top` and `margin-bottom` to get 
above and upper space.  
3px `border` to the border of the btn.  
10px `padding` to expand btn.  
15px `border-radius` to make the btn cute.  
#### hover
`background: #000` to clear your on me.  
`color: #FFF` for the background.  
`transition: .5s` to change btn 
color changing slower.  

