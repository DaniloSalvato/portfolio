type cardProps = {
  isNew?: boolean;
  title: string;
  company: string;
  since: string;
  address: string;
  icons: string[];
  description?: string;
};

const Card = ({
  isNew,
  title,
  company,
  since,
  address,
  icons,
  description,
}: cardProps) => {
  return (
    <div className="flex flex-col w-full sm:w-4/5 lg:w-3/5 justify-center items-start text-slate-400 mt-[41px] md:mt-[82px]">
      {isNew && <span className="text-base pb-5">Most Recently</span>}
      <h2 className="text-slate-800 text-2xl lg:text-[32px] font-semibold leading-9 pb-5">{title}</h2>
      <h3 className="text-amber-600 text-xl font-medium pb-5">{company}</h3>
      <p className="text-base pb-5">
        {since} <span>-</span> {address}
      </p>
      
      <span className="flex pb-5 gap-5 lg:gap-9">
        {icons &&
          icons.map((icon, index) => <img src={icon} alt="icon" key={index} />)}
      </span>
      {description && <p className="w-full lg:w-4/5 text-base lg:text-xl">{description}</p>}
    </div>
  );
};

export default Card;
