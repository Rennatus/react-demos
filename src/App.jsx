import Accordion from "./components/Accordion";
import { accordionData } from "./utils/content";
const App = () => {
  console.log(accordionData);
  return (
    <div>
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  );
};
export default App;
