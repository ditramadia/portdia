interface ProjectTitleProps {
  title: string,
  subtitle: string
};

function ProjectTitle(props: ProjectTitleProps) {
  const { title, subtitle } = props;

  return (
    <>
      <h1 className="mb-4 heading-3 text-on-surface text-left leading-tight tracking-wider">{title}</h1>
      <h2 className="mb-14 poppins text-[1.25rem] text-on-surface-variant text-left leading-tight tracking-wider">{subtitle}</h2>
    </>
  )
}

export default ProjectTitle