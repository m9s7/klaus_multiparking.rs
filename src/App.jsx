import styles from "./style";

import { Navbar } from "./components";

const App = () => (
  <div className="bg-transparent w-full overflow-hidden">
    <Navbar />
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        {/*Other components*/}
        <div className={`${styles.paddingY}`}>
          <p>fk off</p>
        </div>
      </div>
    </div>
  </div>
);

export default App;
