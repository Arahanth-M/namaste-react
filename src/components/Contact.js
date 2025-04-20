const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-red-600 my - 4 py-2">To contact Us : </h1>
      <form>
        <input
          type="text"
          placeholder="name"
          className="border border-black p-2 m-2 "
        />
        <input
          type="text"
          placeholder="message"
          className="border border-black p-2 m-2 "
        />
        <button className="border border-black p-2 m-2 bg-gray-400 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
