import React, { createRef } from "react";
import {useScreenshot, createFileName} from "use-react-screenshot";


export function Screenshot() {
    const ref = createRef(null);
    const[image, takeScreenShot] = useScreenshot({
        type: "image/jpeg",
        quality: 1.0
    }) 
    // const getImage = () => takeScreenShot(ref.current);

    
    const download = (image, { name = 'img', extension = 'jpg' } = {})  => {
        const a = document.createElement('a');
        a.href = image;
        a.download = createFileName(extension, name);
        a.click();
    };

    const downloadScreenshot = () => {
      takeScreenShot(ref.current).then(download);
    }

    return (
        <div>
            <button onClick = {downloadScreenshot}>Take Screeshot</button>
            < div
                ref = {ref}
                style = {{
                    border: "none",
                    backgroundColor: "transparent",
                    width: "100%",
                    height: "800px"
                }}
            ></div> 
        </div>
    );
}