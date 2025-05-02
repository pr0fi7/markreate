
import Section from "@/components/ui/Section";
import SkillBar from "@/components/SkillBar";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

const softSkills = [
  { name: "Leadership and vision of future", level: 90 },
  { name: "Creative and energetic", level: 95 },
  { name: "Reliable - always respecting deadlines", level: 95 },
];

// Technical skills by category
const technicalSkillsByCategory = [
  {
    category: "Programming & Web Development",
    skills: [
      { name: "Python", level: 4 },
      { name: "HTML", level: 4 },
      { name: "CSS", level: 4 },
      { name: "JavaScript", level: 3 },
      { name: "TypeScript", level: 3 },
      { name: "Three.js", level: 3 },
      { name: "React", level: 4 },
      { name: "FastAPI", level: 4 },
      { name: "Django", level: 4 },
      { name: "Flask", level: 4 },
      { name: "Scrapy", level: 4 },
      { name: "Aiogram", level: 4 },
      { name: "WebSockets & Async Processing", level: 4 },
      { name: "RESTful API", level: 4 },
    ],
  },
  {
    category: "Data Science & AI",
    skills: [
      { name: "PyTorch", level: 4 },
      { name: "Pandas", level: 3 },
      { name: "NumPy", level: 3 },
      { name: "Matplotlib", level: 4 },
      { name: "SciPy", level: 3 },
      { name: "PyCaret", level: 5 },
      { name: "YOLO", level: 4 },
      { name: "Stable Diffusion", level: 4 },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "PostgreSQL", level: 4 },
      { name: "MySQL", level: 4 },
      { name: "MongoDB", level: 3 },
      { name: "Qdrant", level: 4 },
      { name: "Redis", level: 4 },
      { name: "Milvus", level: 4 },
    ],
  },
  {
    category: "DevOps & Infrastructure",
    skills: [
      { name: "Docker", level: 4 },
      { name: "Celery", level: 4 },
      { name: "DigitalOcean", level: 4 },
      { name: "Heroku", level: 3 },
    ],
  },
  {
    category: "Other Skills",
    skills: [
      { name: "Fusion 360", level: 4 },
      { name: "Blender", level: 3 },

    ],
  },
];

const Skills = () => {
  return (
    <Section id="skills" title="Skills" className="bg-white py-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div>
          <h3 className="mb-4 text-xl font-semibold">Soft Skills</h3>
          <div className="space-y-4">
            {softSkills.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </div>
        </div>
        
        <div className="lg:col-span-2">
          <h3 className="mb-4 text-xl font-semibold">Technical Skills</h3>
          <div className="space-y-5">
            {technicalSkillsByCategory.map((category) => (
              <Card key={category.category} className="overflow-hidden">
                <CardContent className="p-4">
                  <h4 className="text-md font-semibold mb-2">{category.category}</h4>
                  <Table className="w-full">
                    <TableBody>
                      {category.skills.map((skill) => (
                        <TableRow key={skill.name} className="border-b-0">
                          <TableCell className="py-1.5 font-medium">{skill.name}</TableCell>
                          <TableCell className="py-1.5 text-right">
                            <div className="flex items-center justify-end">
                              {Array.from({ length: 5 }).map((_, index) => (
                                <div 
                                  key={index}
                                  className={`w-3 h-3 mx-0.5 rounded-full ${
                                    index < skill.level ? 'bg-primary' : 'bg-secondary'
                                  }`}
                                ></div>
                              ))}
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Skills;
