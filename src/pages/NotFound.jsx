import PageHero from "../components/common/PageHero";
import Button from "../components/common/Button";

export default function NotFound() {
  return (
    <PageHero sheet="404" label="Not found" tag="Error 404" title={<>Sheet <em>not found.</em></>}
      lede={<><span>This page is not in the drawing set.</span><br /><br /><Button to="/">Back home</Button></>} />
  );
}
