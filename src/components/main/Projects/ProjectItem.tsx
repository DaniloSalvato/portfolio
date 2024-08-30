type ProjectItemProps = {
  area: string;
  title: string;
  description: string;
  technologies: string[];
  gitHubURL: string;
  previewURL?: string;
  thumbnail:string
  background: string;
  reverse?: boolean;
};

const ProjectItem = ({
  area,
  title,
  description,
  technologies,
  gitHubURL,
  previewURL,
  thumbnail,
  background,
  reverse,
}: ProjectItemProps) => {
  return (
    <div data-reverse={reverse} className="flex flex-col lg:flex-row mb-20 gap-20 lg:data-[reverse=true]:flex-row-reverse lg:data-[reverse=true]:ml-0">
      <article data-reverse={reverse} className="flex flex-col w-full lg:w-2/5 lg:h-[665px] justify-center items-start lg:data-[reverse=true]:ml-20 lg:mb-20 px-8 sm:px-12 lg:px-16">
        <span className="bg-amber-600 text-slate-50 px-3 py-1 mb-3 w-fit text-[14px] font-medium rounded">
          {area}
        </span>
        <h2 className="text-slate-900 font-semibold text-[40px] mb-3">
          {title}
        </h2>
        <p className="text-slate-400 text-base mb-6 w-full lg:w-4/5 ">{description}</p>
        <div className="flex mb-6 gap-8">
          {technologies.map((technology, index) => (
            <img
              src={technology}
              alt="tech used in to the project"
              key={index}
              className="size-8"
            />
          ))}
        </div>
        <div className="flex text-slate-400 text-base gap-8">
          <a className="hover:text-slate-500" href={gitHubURL} target="_blank">
            see code
          </a>
          {previewURL && (
            <a className="hover:text-slate-500" href={previewURL} target="_blank">
              see code
            </a>
          )}
        </div>
      </article>
      <article style={{ background }} className="flex w-full lg:w-3/5 lg:rounded-md justify-center items-center">
        <img src={thumbnail} alt="thumb" className="w-full lg:w-4/5 lg:max-h-[665px] object-cover"/>
      </article>
    </div>
  );
};

export default ProjectItem;
