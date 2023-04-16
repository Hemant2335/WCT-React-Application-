import React from 'react';
import Card from './Card';
const HomeCard = () => {
    return <div>
        <div className="grid grid-cols-3 auto-cols-auto m-10 p-10">
        <Card title = "Weather"  img = "https://w0.peakpx.com/wallpaper/655/639/HD-wallpaper-abstract-light-cloud-lightning-purple-weather-thumbnail.jpg" link  = "/weather"/>
        <Card title = "Calculator" img = "https://c0.wallpaperflare.com/preview/499/391/646/accountant-calculator-accounting-graphs.jpg"/>
        <Card title = "Translator" img = "https://w0.peakpx.com/wallpaper/619/435/HD-wallpaper-translate-translation-thumbnail.jpg"/>
      </div>
    </div>;
}
export default HomeCard;