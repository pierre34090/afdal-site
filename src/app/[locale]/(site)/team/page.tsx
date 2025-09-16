// app/team/page.tsx
export default function TeamPage() {
  const team = [
    { name: "Pierre Cazals", role: "Optimization Engineer", img: "/placeholder.png" },
    { name: "Ali Al Zoabi", role: "Entrepreneur & Researcher", img: "/placeholder.png" },
    { name: "Satya Tamby", role: "Research Scientist", img: "/placeholder.png" },
  ];

  return (
    <section className="p-8 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Our Team</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {team.map((member) => (
          <div
            key={member.name}
            className="border rounded-lg p-4 text-center shadow-sm"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
