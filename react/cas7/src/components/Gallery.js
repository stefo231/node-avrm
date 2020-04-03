import React from "react";
import Popup from "./Popup";

export default function Gallery(props) {
  return (
    <div id="gallery">
      <h2>Gallery</h2>
      {props.photoList.slice(0, 50).map(photo => {
        return (
          <div
            onClick={() => {
              props.openPhoto(photo.url);
            }}
            key={photo.id}
            className="image-holder"
          >
            <img src={photo.thumbnailUrl} alt={photo.title} />
          </div>
        );
      })}

      {props.popupPhoto !== "" ? (
        <Popup photoUrl={props.popupPhoto} close={props.closePicture} />
      ) : null}
    </div>
  );
}
