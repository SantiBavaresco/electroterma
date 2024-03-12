"use client";
import Image from "next/image";
import "./styles.css";
// import "./scrubbing.js"
import {useEffect} from "react";

export default function VideoScrubber() {

    useEffect(() => {
        // Cargar el archivo JS después del renderizado
        // myScript();
        require("./scrubbing");
    
        // Devolver una función de limpieza
        return () => {
          // Cualquier limpieza que se necesite al desmontar el componente
        };
      }, []);
    
    return (
        <div>
            {/* <header>
                <h1>
                    <img src="logo.svg" alt="Wildrise" />
                </h1>

                <nav>
                    <a href="#">Discover</a>
                    <a href="#">Our Story</a>
                </nav>

                <nav>
                    <a href="#">The Latest</a>
                    <a href="#">Campsites</a>
                </nav>
            </header> */}
            {/* <script src="./scrubbing.js" async ></script> */}

            <section class="hero">
                <h2>Lets face it, theres nothing quite like it.</h2>
            </section>

            <section class="intro">
                <div>
                    <p>
                        At Wildrise, were all about embracing the outdoor life.
                        Weve got this deep-rooted belief that the wild, untamed
                        places out there are where you discover your true self.
                        Thats why were on a mission to ignite a lifelong love
                        affair with the great outdoors for folks.
                    </p>

                    <p>
                        <a href="#" class="button">
                            Discover Campsites
                        </a>
                    </p>
                </div>
            </section>

            <section class="vid" id="video-ventilador">
                <div class="holder">
                    <video
                        type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
                        src="../img/solerpalau/tda/SolerPalauVideo1.mkv"
                        autoplay
                        muted
                        loop
                        playsinline
                        // controls
                        preload="preload"
                    ></video>
                </div>

                {/* <div class="story">
        <div>
          <h3>In the heart of Wildrise&hellip;</h3>
        </div>
        <div>
          <h3>&hellip;where the breezes play.</h3>
        </div>
        <div>
          <h3>We embrace the call of the wild each day.</h3>
        </div>
        <div>
          <h3>Untamed places stretch,</h3>
        </div>
        <div>
          <h3>vast and wide.</h3>
        </div>
        <div>
          <h3>Whispering secrets of a world outside.</h3>
        </div>
      </div> */}
            </section>

            <section class="savvy">
                <h3>Think of us as your adventure-savvy older sibling.</h3>

                <div>
                    <p>
                        <Image
                            src="ice.jpg"
                            alt="Photo of camping equipment on a snowy ground"
                        />
                    </p>

                    <p>
                        Weve got the coolest gear and the hottest tips to help
                        you dive headfirst into natures wonders. Whether youre
                        in it for the adrenaline rush, the peaceful escape, or
                        just a breath of fresh air with friends, weve got your
                        back. Youre saying yes to preserving the environment,
                        supporting sustainable business practices, and keeping
                        the spirit of adventure alive.
                    </p>

                    <p>
                        <a href="#" class="button">
                            Read the latest tips
                        </a>
                    </p>
                </div>
            </section>

            <footer>
                <Image src="footer.svg" alt="Wildrise footer" />
            </footer>
            {/* <script src="scrubbing.js"></script> */}
        </div>
    );
}
