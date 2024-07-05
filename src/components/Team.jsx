import TeamMembers from "../assets/team";

const Team = () => {
  return (
    <div className="mt-10 lg:mt-16">
      <h2 className="text-2xl lg:text-3xl font-semibold text-gray-900 md:text-center">Meet the team</h2>
      <p className="md:text-center">
        Our team is made up of dedicated people who pour their hearts into every
        treat we create.
      </p>

      <div className="mt-8 grid place-items-center grid-cols-1 gap-4 md:grid-cols-2 text-center max-w-2xl mx-auto">
        {TeamMembers.map((member) => (
          <div key={member.id} className="border border-gray-300 rounded-lg py-7 w-full flex flex-col items-center max-w-80">
            <div className="flex justify-center bg-gray-400 rounded-full w-32 h-32">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full rounded-full object-cover object-top"
              />
            </div>
            <h3 className="text-xl font-semibold mt-4">{member.name}</h3>
            <p className="">
              {member.position}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
