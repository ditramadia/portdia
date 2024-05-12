import React from 'react'
import LabelWithIcon from '../display/LabelWithIcon'
import ThreeCircleIcon from '../icons/StarIcon copy'
import ProjectShowcase from '../display/ProjectShowcase'

interface NextProjectProps {
  name: string,
  company: string,
  releaseDate: string,
  type: string,
  summary: string,
  url: string,
  thumbnail: string,
  thumbnail2: string,
}

const NextProject = (props: NextProjectProps) => {
  const { name, company, releaseDate, type, summary, url, thumbnail, thumbnail2 } = props;

  return (
    <div className='mt-48'>
      <LabelWithIcon
        icon={<ThreeCircleIcon width="2rem" />}
        text='NEXT PROJECT'
      />
      <ProjectShowcase
        name={name}
        company={company}
        releaseDate={releaseDate}
        type={type}
        summary={summary}
        description={summary}
        url={url}
        thumbnail={thumbnail}
        thumbnail2={thumbnail2}
      />
    </div>
  )
}

export default NextProject