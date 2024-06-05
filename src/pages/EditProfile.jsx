import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const EditProfile = () => {
  const user = useLoaderData();
  console.log(user); 

  const Handlesubmit = async (e) => {
    const token = localStorage.getItem('token')
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const userData = { name, email, password };
    console.log(userData);

    try {
      const response = await fetch(`http://localhost:5000/user/${user?.email}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          authorization:`Bearer ${token}`
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        toast.success('profile edit successfully!');
      } else {
        toast.error('Failed to profile edit.');
      }
    } catch (error) {
      toast.error('An error occurred while edit the profile.');
    }
  };

  return (
    <div>
      <div className="hero h-[80vh]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl font-bold">Edit Your Profile</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={Handlesubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  defaultValue={user?.email}
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  defaultValue={user?.name}
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Submit Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
