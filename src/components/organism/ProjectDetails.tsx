interface ProjectDetailsProps {
  timeline: string,
  team: string[],
  tools: string[],
  roles: string[]
};

function ProjectDetails(props: ProjectDetailsProps) {
  const { timeline, team, tools, roles } = props;

  return (
    <div className="mb-14 w-full h-fit flex flex-col gap-5 md:flex-row">

      <div className="w-full h-fit flex gap-5 md:flex-col">
        <span className="w-[150px] mt-[2px] label text-tertiary">TIMELINE</span>
        <div className="w-full flex flex-col gap-2">
          <span className="body text-on-surface">{timeline}</span>
        </div>
      </div>

      <div className="w-full h-fit flex gap-5 md:flex-col">
        <span className="w-[150px] mt-[2px] label text-tertiary">TEAM</span>
        <div className="w-full flex flex-col gap-2">
          {
            team.map((member, index) => (
              <span key={index} className="body text-on-surface">{member}</span>
            ))
          }
        </div>
      </div>

      <div className="w-full h-fit flex gap-5 md:flex-col">
        <span className="w-[150px] mt-[2px] label text-tertiary">TOOLS</span>
        <div className="w-full flex flex-col gap-2">
          {
            tools.map((tool, index) => (
              <span key={index} className="body text-on-surface">{tool}</span>
            ))
          }
        </div>
      </div>

      <div className="w-full h-fit flex gap-5 md:flex-col">
        <span className="w-[150px] mt-[2px] label text-tertiary">MY ROLE</span>
        <div className="w-full flex flex-col gap-2">
          {
            roles.map((role, index) => (
              <span key={index} className="body text-on-surface">{role}</span>
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default ProjectDetails