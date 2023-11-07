const SubHeader = () => {
  return (
    <div className="sub_header">
      <div className="current_time">
        <span>{`2023.11.01 23:03:42`}</span>
        <img
          src={`https://github.com/Kijun-Park/react-boilerplate/assets/35815788/af1e74da-0cd6-4737-8dd4-214078cbaf74`}
          alt={`24 dropdown`}
        />
      </div>
      <div className="done_list-btn">
        <span>{`Done List`}</span>
        <img
          src={`https://github.com/Kijun-Park/react-boilerplate/assets/35815788/171ad745-b9f8-462b-b0ce-f8ad4b77a926`}
          alt={`to done list`}
        />
      </div>
    </div>
  );
};

export default SubHeader;
