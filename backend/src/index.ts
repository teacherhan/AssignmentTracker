import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

interface Course {
  id: number;
  title: string;
  description: string;
}

const courses: Course[] = [
  { id: 1, title: 'Intro to LMS', description: 'Basics of learning management.' },
];

app.get('/api/courses', (req, res) => {
  res.json(courses);
});

app.get('/api/courses/:id', (req, res) => {
  const course = courses.find(c => c.id === Number(req.params.id));
  if (!course) {
    return res.status(404).json({ message: 'Not found' });
  }
  res.json(course);
});

app.post('/api/courses', (req, res) => {
  const course: Course = {
    id: courses.length + 1,
    title: req.body.title,
    description: req.body.description,
  };
  courses.push(course);
  res.status(201).json(course);
});

interface Plugin {
  id: number;
  name: string;
  version: string;
  manifest: object;
}

const plugins: Plugin[] = [];

app.get('/api/plugins', (req, res) => {
  res.json(plugins);
});

app.post('/api/plugins', (req, res) => {
  const plugin: Plugin = {
    id: plugins.length + 1,
    name: req.body.name,
    version: req.body.version,
    manifest: req.body.manifest,
  };
  plugins.push(plugin);
  res.status(201).json(plugin);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Backend running on port ${port}`);
});
