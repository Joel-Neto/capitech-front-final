import propTypes from "prop-types"
import DOMPurify from 'dompurify';

function RenderHtml({htmlContent}) {
  const sanitizedHtml = DOMPurify.sanitize(htmlContent);

  return (
    <div
      className="py-5"
      dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
    />
  );
}

RenderHtml.propTypes = {
  htmlContent: propTypes.string
}

export default RenderHtml;