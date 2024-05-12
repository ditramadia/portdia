import PrimaryButton from "../button/PrimaryButton";
import ArrowLinkIcon from "../icons/ArrowLinkIcon";

interface ProjectDetailsProps {
  timeline: string,
  summary: string,
  description: string,
  overview: string[],
  code: string,
  site: string,
  team: string[],
  tools: string[],
  roles: string[],
};

const ProjectDetails = (props: ProjectDetailsProps) => {
  const { timeline, summary, description, overview, code, site, team, tools, roles } = props;

  return (
    <div className="container-sm my-24 flex flex-col gap-10 md:gap-12 md:my-48">
      
      {/* Title */}
      <div>
        <h2 className="mb-4 heading-4 text-light md:mb-2">{summary}</h2>
        <p className="heading-6 text-dim">{description}</p>
      </div>
      
      {/* Overview */}
      <div>
        <h3 className="label-m text-light">Overview</h3>
        {
          overview.map((paragraph, i) => (
            <p 
              key={i}
              className={`${i == 0 ? 'mt-3' : 'mt-2'} body-m text-dim`}
            >
              {paragraph}
            </p>
          ))
        }
      </div>
      
      {/* Link buttons */}
      <div className="flex gap-4">
        {
          code &&
          <div className="w-[120px]">
            <a href={code}
              rel="noopener noreferrer"
              target="_blank"
            >
              <PrimaryButton
                type="contained"
                size="md"
                roundness="full"
                text="Code"
                rightIcon={<ArrowLinkIcon width="1rem" />}
              />
            </a>
          </div>
        }
        {
          site &&
          <div className="w-[120px]">
            <a 
              href={site}
              rel="noopener noreferrer" 
              target="_blank">
              <PrimaryButton
                type="contained"
                size="md"
                roundness="full"
                text="Visit"
                rightIcon={<ArrowLinkIcon width="1rem" />}
              />
            </a>
          </div>
        }
      </div>

      {/* Details */}
      <div className="flex flex-col gap-6 md:flex-row justify-between">
        
        {/* Timeline */}
        <div className="flex md:flex-col md:w-1/4">
          <h3 className="w-1/3 mb-3 text-light label-m md:w-full">Timeline</h3>
          <div className="flex flex-col gap-2">
            <p className="text-dim body-m">{timeline}</p>
          </div>
        </div>

        {/* Team */}
        <div className="flex md:flex-col md:w-1/4">
          <h3 className="w-1/3 mb-3 text-light label-m md:w-full">Team</h3>
          <div className="flex flex-col gap-2">
            {
              team.map((member, i) => (
                <p className='text-dim body-m'>{member}</p>
              ))
            }
          </div>
        </div>

        {/* Tools */}
        <div className="flex md:flex-col md:w-1/4">
          <h3 className="w-1/3 mb-3 text-light label-m md:w-full">Tools</h3>
          <div className="flex flex-col gap-2">
            {
              tools.map((tool, i) => (
                <p className='text-dim body-m'>{tool}</p>
              ))
            }
          </div>
        </div>

        {/* My roles */}
        <div className="flex md:flex-col md:w-1/4">
          <h3 className="w-1/3 mb-3 text-light label-m md:w-full">My Roles</h3>
          <div className="flex flex-col gap-2">
            {
              roles.map((role, i) => (
                <p className='text-dim body-m'>{role}</p>
              ))
            }
          </div>
        </div>
      </div>

    </div>
  );
};

export default ProjectDetails;