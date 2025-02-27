import { usePost } from "./postContent";

function Input() {
  const {
    ccTips,
    setCcTips,
    cashTips,
    setCashTips,
    busser,
    handleBusserChange,
  } = usePost();
  const handleCcTipsChange = (event) => {
    setCcTips(event.target.value);
  };

  const handleCashTipsChange = (event) => {
    setCashTips(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="{styles.inputGroup}">
          <input
            id="ccTips"
            type="number"
            placeholder="Credit Card Tips"
            value={ccTips}
            onChange={handleCcTipsChange}
          />
        </div>
        <div className="{styles.inputGroup}">
          <input
            id="cashTips"
            type="number"
            placeholder="Cash Tips"
            value={cashTips}
            onChange={handleCashTipsChange}
          />
        </div>
        <div className="{styles.inputGroup">
          <label htmlFor="busser">Busser %</label>
          <input
            id="busser"
            type="range"
            min={15}
            max={25}
            value={busser}
            onChange={handleBusserChange}
          />
          <output>{busser}%</output>
        </div>
      </form>
    </div>
  );
}

export default Input;
