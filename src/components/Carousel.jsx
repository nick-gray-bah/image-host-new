import { useState } from "react";
import { Container } from "@mui/material";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Inline from "yet-another-react-lightbox/plugins/inline";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import images from "../utils/images";

export default function Carousel() {
  const [advancedExampleOpen, setAdvancedExampleOpen] = useState(true);

  return (
    <Container>
      <div
        style={{
          maxWidth: "1200px",
          aspectRatio: "3 / 2",
        }}
      >
        <Lightbox
          open={advancedExampleOpen}
          close={() => setAdvancedExampleOpen(false)}
          slides={images}
          plugins={[Inline, Captions, Zoom]}
        />
      </div>
    </Container>
  );
}
