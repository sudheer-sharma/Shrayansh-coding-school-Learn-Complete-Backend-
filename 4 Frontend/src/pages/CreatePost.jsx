import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = e.target;

    axios
      .post("http://localhost:4000/create_post", formData)
      .then((res) => {
        console.log(res);
        navigate("/feed-post");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section className="create-post-section">
      <h1>Create New Post</h1>

      <form onSubmit={handleSubmit}>
        <input type="file" name="image" accept="Image/*" />
        <input
          type="text"
          name="caption"
          placeholder="Enter Capotion"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default CreatePost;
