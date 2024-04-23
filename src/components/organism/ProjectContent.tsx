import SolidButton from "../atom/SolidButton"

interface ProjectContentProps {
  content: string[],
  code?: string,
  site?: string
};

function ProjectContent(props: ProjectContentProps) {
  const { content, code, site } = props;

  return (
    <>
      {
        content.map((paragraph, index) => (
          <p key={index} className="mb-7 body text-on-surface leading-relaxed">{paragraph}</p>
        ))
      }

      <div className="mb-14 flex gap-4">
        {
          code &&
          <a href={code} rel="noopener noreferrer" target="_blank">
            <div className="w-28 h-12">
              <SolidButton text="Code" iconRight="ic-arrow-link.svg" />
            </div>
          </a>
        }
        {
          site &&
          <a href={site} rel="noopener noreferrer" target="_blank">
            <div className="w-28 h-12">
              <SolidButton text="Visit" iconRight="ic-arrow-link.svg" />
            </div>
          </a>
        }
      </div>
    </>
  )
}

export default ProjectContent