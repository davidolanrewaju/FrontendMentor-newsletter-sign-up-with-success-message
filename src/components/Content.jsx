import './Content.css';

const Content = () => {
  const listContents = [
    "Product discovery and building what matters",
    " Measuring to ensure updates are a success",
    "And much more!",
  ];
  return (
    <>
      <div className="header-text">
        <h1>Stay Updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
      </div>
      {
        listContents.map((listContent, index) => (
            <div className="list-container" key={index}>
                <img src="src\assets\images\icon-list.svg" alt="icon-list" />
                <p>{listContent}</p>
            </div>
        ))
      }
    </>
  );
};

export default Content;
