import ClassifySvg from "../Icon/Svg/ClassifySvg";
import EmailSvg from "../Icon/Svg/EmailSvg";
import SearchSvg from "../Icon/Svg/SearchSvg";

const IndexFeature: React.FunctionComponent = () => {
  return (
    <>
      <div className="col-span-12 my-[2em] flex items-center justify-center whitespace-pre-line text-center font-bold text-[2em]">
        {`ABOUT\nMAKE HABIT TO READ NEWS\nKEYWORDKATCH`}
      </div>
      <div className="col-start-1 col-end-5 aspect-square">
        <EmailSvg className="w-full h-full p-[10%]" />
      </div>
      <div className="col-start-5 col-end-9 aspect-square">
        <SearchSvg fill="black" className="w-full h-full p-[10%]" />
      </div>
      <div className="col-start-9 col-end-13 aspect-square">
        <ClassifySvg className="w-full h-full p-[10%]" />
      </div>
      <div className="col-start-1 col-end-5 flex justify-center p-[10%]">
        이메일로 기사를 전송합니다.
      </div>
      <div className="col-start-5 col-end-9 flex justify-center p-[10%]">
        원하는 키워드에 대한 기사만 읽을 수 있습니다.
      </div>
      <div className="col-start-9 col-end-13 flex justify-center p-[10%]">
        선별된, 유용한 기사 위주로 읽을 수 있습니다.
      </div>
    </>
  );
};

export default IndexFeature;
