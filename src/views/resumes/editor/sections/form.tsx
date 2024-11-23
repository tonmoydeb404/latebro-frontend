import { useEditor } from "@/store/hooks";
import ContactForm from "./contact";
import EducationsForm from "./educations";
import ExperiencesForm from "./experiences";
import LanguagesForm from "./languages";
import ProfileForm from "./profile";
import ProjectsForm from "./projects";
import SkillsForm from "./skills";
import SocialsForm from "./socials";

type Props = {};

const Form = (props: Props) => {
  const { nav } = useEditor();
  return (
    <>
      {nav === 0 && <ProfileForm />}
      {nav === 1 && <ContactForm />}
      {nav === 2 && <EducationsForm />}
      {nav === 3 && <ExperiencesForm />}
      {nav === 4 && <ProjectsForm />}
      {nav === 5 && <SkillsForm />}
      {nav === 6 && <LanguagesForm />}
      {nav === 7 && <SocialsForm />}
    </>
  );
};

export default Form;