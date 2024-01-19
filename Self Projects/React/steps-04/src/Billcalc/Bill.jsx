function Bill({ baseBill, setBaseBill }) {
  return (
    <div>
      <label>
        Base Bill
        <input
          type="number"
          value={baseBill}
          placeholder="Enter amout $..."
          onChange={(e) => setBaseBill(+e.target.value)}
        />
      </label>
    </div>
  );
}

export default Bill;
