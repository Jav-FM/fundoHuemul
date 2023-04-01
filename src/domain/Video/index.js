import React from "react";
import "./Video.scss";

const Video = () => {
  //   const promotionalVideo =
  //     "https://player.vimeo.com/video/765422384?h=35c046b135&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479";

  return (
    <section id="video" className="container">
      <div id="contentContainer">
        <h2 id="title">Video</h2>
        <iframe
          width="100%"
          height="650px"
          src="https://www.youtube.com/embed/Y3pLuC_vvSY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        {/* <video width="100%" height="auto" controls>
          <source src={promotionalVideo} type="video/mp4" />
          Tu navegador no soporta los vídeos de HTML5
        </video> */}
      </div>
    </section>
  );
};

export { Video };
