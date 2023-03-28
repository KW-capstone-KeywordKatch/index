const IndexFeature: React.FunctionComponent = () => {
  return (
    <>
      <div className="col-span-12 my-[2em] flex items-center justify-center whitespace-pre-line text-center font-bold text-[2em]">
        {`ABOUT\nMAKE HABIT TO READ NEWS\nKEYWORDKATCH`}
      </div>
      <div className="col-start-1 col-end-5 bg-slate-200 aspect-square">
        그림1
      </div>
      <div className="col-start-5 col-end-9 bg-slate-200 aspect-square">
        그림2
      </div>
      <div className="col-start-9 col-end-13 bg-slate-200 aspect-square">
        그림3
      </div>
      <div className="col-start-1 col-end-5">설명1</div>
      <div className="col-start-5 col-end-9"> 설명2</div>
      <div className="col-start-9 col-end-13"> 설명3</div>
    </>
  );
};

export default IndexFeature;
