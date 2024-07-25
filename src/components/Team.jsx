import TeamMembers from "../assets/team";

const Team = () => {
  return (
    <div className="mt-10 lg:mt-16">
      <h2 className="text-2xl font-semibold text-gray-900 md:text-center lg:text-3xl">
        Meet the team
      </h2>
      <p className="md:text-center">
        Our team is made up of dedicated people who pour their hearts into every
        treat we create.
      </p>

      <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 place-items-center gap-4 text-center md:grid-cols-2">
        {TeamMembers.map((member) => (
          <div
            key={member.id}
            className="flex w-full max-w-80 flex-col items-center rounded-lg border border-gray-300 py-7"
          >
            <div className="flex h-32 w-32 justify-center rounded-full bg-gray-400">
              <img
                height="200px"
                width="200px"
                src={member.image}
                alt={member.name}
                className="h-full w-full rounded-full object-cover object-top"
              />
            </div>
            <h3 className="mt-4 text-xl font-semibold">{member.name}</h3>
            <p className="">{member.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
