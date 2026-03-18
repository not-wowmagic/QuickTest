// src/data/seedQuestions.js

import filipinoData from './filipino.json';
export const SUBJECTS = {
  filipino: {
    id: 'filipino',
    title: "Filipino sa Iba't Ibang Larangan",
    description: 'Pag-aaral ng wika at pananaliksik sa kultura, sining, at kasaysayan.',
    icon: '📜',
    tags: ['Lika', 'Pananaliksik'],
    questions: filipinoData
  },
  ethics: {
    id: 'ethics',
    title: 'Ethics with Peace Education',
    description: 'Explore moral principles and what makes actions right or wrong.',
    icon: '⚖️',
    tags: ['Philosophy', 'Morality'],
    questions: [
  {
    "id": "ethics-q1",
    "text": "What does the Greek word ethos mean?",
    "options": [
      "Reason",
      "Custom, habit, or character",
      "Duty",
      "Virtue"
    ],
    "answer": 1,
    "explanation": "Correct answer is B"
  },
  {
    "id": "ethics-q2",
    "text": "Ethics is best described as:",
    "options": [
      "The study of human biology",
      "The practical science of the morality of human conduct",
      "A set of laws enforced by the state",
      "The study of religious traditions"
    ],
    "answer": 1,
    "explanation": "Correct answer is B"
  },
  {
    "id": "ethics-q3",
    "text": "According to Glenn (1930), ethics is:",
    "options": [
      "A theoretical science of human emotions",
      "The practical science of the morality of human conduct",
      "The study of political systems",
      "A branch of natural science"
    ],
    "answer": 1,
    "explanation": "Correct answer is B"
  },
  {
    "id": "ethics-q4",
    "text": "Common-sense ethics refers to:",
    "options": [
      "Knowledge about right and wrong learned from textbooks",
      "Knowledge about right and wrong that a person already has before formal study",
      "Ethics applied to common social situations only",
      "Rules enforced by social media"
    ],
    "answer": 1,
    "explanation": "Correct answer is B"
  },
  {
    "id": "ethics-q5",
    "text": "Systematic ethics is:",
    "options": [
      "Ethics based solely on intuition",
      "Knowledge about right and wrong gained through formal course discussions and activities",
      "A list of laws passed by the government",
      "Ethics practiced only in professional settings"
    ],
    "answer": 1,
    "explanation": "Correct answer is B"
  },
  {
    "id": "ethics-q6",
    "text": "Ethics and morality have identical etymological origins.",
    "options": [
      "True",
      "False"
    ],
    "answer": 1,
    "explanation": "Correct answer is False"
  },
  {
    "id": "ethics-q7",
    "text": "The Latin words mos, moris, and moralitas all relate to:",
    "options": [
      "Justice and fairness",
      "Custom, habit, and character",
      "Religious obedience",
      "Political loyalty"
    ],
    "answer": 1,
    "explanation": "Correct answer is B"
  },
  {
    "id": "ethics-q8",
    "text": "A moral statement is best described as:",
    "options": [
      "A factual statement about what is the case",
      "A normative statement expressing a value judgment about what ought to be the case",
      "A legal declaration by a court",
      "An emotional reaction to a situation"
    ],
    "answer": 1,
    "explanation": "Correct answer is B"
  },
  {
    "id": "ethics-q9",
    "text": "A normative statement claims that something is the case, while a factual statement claims something ought to be the case.",
    "options": [
      "True",
      "False"
    ],
    "answer": 1,
    "explanation": "Correct answer is False"
  },
  {
    "id": "ethics-q10",
    "text": "According to Ocampo (2018), when ethics talks about the good, it points to:",
    "options": [
      "Subjective feelings about pleasure",
      "Objective facts, rules, and norms that define being a good person",
      "Cultural traditions passed down through generations",
      "Religious commandments"
    ],
    "answer": 1,
    "explanation": "Correct answer is B"
  },
  {
    "id": "ethics-q11",
    "text": "Ethics has a categorical norm, which means:",
    "options": [
      "Ethics only applies to certain people",
      "One has to act or behave in a specific way",
      "Ethics changes based on context",
      "Rules are optional suggestions"
    ],
    "answer": 1,
    "explanation": "Correct answer is B"
  },
  {
    "id": "ethics-q12",
    "text": "Theory in ethics is useful even without applicability to real life.",
    "options": [
      "True",
      "False"
    ],
    "answer": 1,
    "explanation": "Correct answer is False"
  },
  {
    "id": "ethics-q13",
    "text": "Ethical relativism (ER) is the view that:",
    "options": [
      "All moral principles are absolute and universal",
      "All moral principles are valid relative to a particular society or individual",
      "Morality is determined solely by religion",
      "Ethics should be based on scientific evidence"
    ],
    "answer": 1,
    "explanation": "Correct answer is B"
  },
  {
    "id": "ethics-q14",
    "text": "Who is associated with the statement 'Man is the measure of all things'?",
    "options": [
      "Aristotle",
      "Plato",
      "Protagoras",
      "Socrates"
    ],
    "answer": 2,
    "explanation": "Correct answer is C"
  },
  {
    "id": "ethics-q15",
    "text": "Which is NOT one of the arguments for ethical relativism?",
    "options": [
      "Diversity Argument",
      "Dependency Argument",
      "Universality Argument",
      "Toleration Argument"
    ],
    "answer": 2,
    "explanation": "Correct answer is C"
  },
  {
    "id": "ethics-q16",
    "text": "Cultural ethical relativism holds that moral principles are valid relative to:",
    "options": [
      "Each individual",
      "A particular culture or society",
      "A religious institution",
      "A government"
    ],
    "answer": 1,
    "explanation": "Correct answer is B"
  },
  {
    "id": "ethics-q17",
    "text": "Individual ethical relativism holds that moral principles are valid relative to:",
    "options": [
      "A nation",
      "A culture",
      "Each individual person",
      "A professional code"
    ],
    "answer": 2,
    "explanation": "Correct answer is C"
  },
  {
    "id": "ethics-q18",
    "text": "Moral standards, according to Evangelista and Mabacquiao, are established by the decisions of authoritarian bodies.",
    "options": [
      "True",
      "False"
    ],
    "answer": 1,
    "explanation": "Correct answer is False"
  },
  {
    "id": "ethics-q19",
    "text": "Which of the following is TRUE about moral standards?",
    "options": [
      "They apply only within a single country",
      "They are solely determined by majority consensus",
      "They have universal validity",
      "They are created by authoritarian bodies"
    ],
    "answer": 2,
    "explanation": "Correct answer is C"
  },
  {
    "id": "ethics-q20",
    "text": "An act can be legal but immoral, or moral but illegal.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "explanation": "Correct answer is True"
  },
  {
    "id": "ethics-q21",
    "text": "How does ethics differ from law?",
    "options": [
      "Ethics is enforced by courts; law is not",
      "The legal sphere is distinct from the moral sphere",
      "Ethics only applies to public figures",
      "Law always reflects moral truth"
    ],
    "answer": 1,
    "explanation": "Correct answer is B"
  },
  {
    "id": "ethics-q22",
    "text": "How does ethics relate to psychology?",
    "options": [
      "Psychology prescribes how people ought to behave; ethics describes how they do",
      "Psychology describes how people actually behave; ethics prescribes how they ought to behave",
      "Both disciplines are identical in purpose",
      "Ethics studies the human brain"
    ],
    "answer": 1,
    "explanation": "Correct answer is B"
  },
  {
    "id": "ethics-q23",
    "text": "Metaethics is concerned with:",
    "options": [
      "Applying ethical principles to real-world situations",
      "The nature and meaning of moral concepts, assumptions, and claims",
      "Formulating specific moral rules for conduct",
      "Studying the history of moral philosophy"
    ],
    "answer": 1,
    "explanation": "Correct answer is B"
  },
  {
    "id": "ethics-q24",
    "text": "Normative ethics involves:",
    "options": [
      "Studying how people behave in society",
      "Investigating specific ethical issues in professions",
      "Formulating moral norms or rules as the basis for judging right and wrong",
      "Analyzing brain chemistry related to moral decisions"
    ],
    "answer": 2,
    "explanation": "Correct answer is C"
  },
  {
    "id": "ethics-q25",
    "text": "Applied ethics is primarily concerned with:",
    "options": [
      "Abstract questions about the nature of morality",
      "Particular issues with moral content, subject to moral judgment",
      "The relationship between ethics and biology",
      "Developing new ethical theories"
    ],
    "answer": 1,
    "explanation": "Correct answer is B"
  },
  {
    "id": "ethics-q26",
    "text": "Normative ethics studies the three broad ethical perspectives of consequentialism, deontology, and virtue ethics.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "explanation": "Correct answer is True"
  },
  {
    "id": "ethics-q27",
    "text": "Which branch of ethics asks 'Is morality objective or subjective?'",
    "options": [
      "Applied Ethics",
      "Normative Ethics",
      "Metaethics",
      "Practical Ethics"
    ],
    "answer": 2,
    "explanation": "Correct answer is C"
  },
  {
    "id": "ethics-q28",
    "text": "Applied ethics deals only with issues related to public policy and professions.",
    "options": [
      "True",
      "False"
    ],
    "answer": 1,
    "explanation": "Correct answer is False"
  },
  {
    "id": "ethics-q29",
    "text": "Ethical reflection and discernment are necessary because:",
    "options": [
      "They help us follow laws more effectively",
      "They help us determine whether we are truly right or wrong",
      "They allow us to avoid making any decisions",
      "They replace the need for moral standards"
    ],
    "answer": 1,
    "explanation": "Correct answer is B"
  },
  {
    "id": "ethics-q30",
    "text": "Ethical standards have no role in forming sound ethical judgment.",
    "options": [
      "True",
      "False"
    ],
    "answer": 1,
    "explanation": "Correct answer is False"
  },
  {
    "id": "ethics-q31",
    "text": "Consequentialism is best described as:",
    "options": [
      "A theory focused on the intentions behind actions",
      "A broad theoretical perspective that focuses on the consequences of an action",
      "A theory that judges acts based on divine law",
      "A theory concerned only with personal happiness"
    ],
    "answer": 1,
    "explanation": "Correct answer is B"
  },
  {
    "id": "ethics-q32",
    "text": "According to Copp and Brink (2006), consequentialism makes which concept explanatorily primary?",
    "options": [
      "Duty",
      "Virtue",
      "The good",
      "Rights"
    ],
    "answer": 2,
    "explanation": "Correct answer is C"
  },
  {
    "id": "ethics-q33",
    "text": "Impersonal goods are values directly connected to human welfare and well-being.",
    "options": [
      "True",
      "False"
    ],
    "answer": 1,
    "explanation": "Correct answer is False"
  },
  {
    "id": "ethics-q34",
    "text": "Which of the following is an example of an impersonal good?",
    "options": [
      "Personal health",
      "A person's financial security",
      "The beauty of a sunset",
      "An individual's happiness"
    ],
    "answer": 2,
    "explanation": "Correct answer is C"
  },
  {
    "id": "ethics-q35",
    "text": "Impartial consequentialism emphasizes:",
    "options": [
      "Prioritizing one's family and friends",
      "Equal consideration of everyone's interests regardless of who they are",
      "Giving more weight to the interests of the majority",
      "Prioritizing the interests of future generations"
    ],
    "answer": 1,
    "explanation": "Correct answer is B"
  },
  {
    "id": "ethics-q36",
    "text": "Partial consequentialism allows for special moral consideration for certain individuals like family or friends.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "explanation": "Correct answer is True"
  },
  {
    "id": "ethics-q37",
    "text": "Self-referential altruism is described as:",
    "options": [
      "Caring only about oneself",
      "A position between impartial and partial consequentialism where concern has wide scope but variable weight",
      "An extreme form of impartial consequentialism",
      "The belief that only one's own group matters morally"
    ],
    "answer": 1,
    "explanation": "Correct answer is B"
  },
  {
    "id": "ethics-q38",
    "text": "Agent-neutral consequentialism:",
    "options": [
      "Allows agents to give special moral weight to their own interests",
      "Treats all agents from a universal standpoint without special weight to the agent's own perspective",
      "Judges actions based on the agent's cultural background",
      "Prioritizes the agent's long-term happiness"
    ],
    "answer": 1,
    "explanation": "Correct answer is B"
  },
  {
    "id": "ethics-q39",
    "text": "Agent-relative consequentialism:",
    "options": [
      "Ignores the identity of the moral agent entirely",
      "Allows moral agents to give special weight to their own relationships and commitments",
      "Treats all consequences as equally important regardless of who causes them",
      "Applies only to government officials"
    ],
    "answer": 1,
    "explanation": "Correct answer is B"
  },
  {
    "id": "ethics-q40",
    "text": "Act consequentialism evaluates:",
    "options": [
      "Whether an action conforms to an established rule",
      "The character of the person performing the action",
      "The specific consequences of that individual act",
      "The intentions behind the act"
    ],
    "answer": 2,
    "explanation": "Correct answer is C"
  },
  {
    "id": "ethics-q41",
    "text": "Scalar consequentialism treats morality as a binary system of right and wrong.",
    "options": [
      "True",
      "False"
    ],
    "answer": 1,
    "explanation": "Correct answer is False"
  },
  {
    "id": "ethics-q42",
    "text": "Scalar consequentialism evaluates actions based on:",
    "options": [
      "Whether they follow a specific rule",
      "How good or bad their consequences are, as a matter of degree",
      "Whether they are intended to be good",
      "How they compare to divine commands"
    ],
    "answer": 1,
    "explanation": "Correct answer is B"
  },
  {
    "id": "ethics-q43",
    "text": "Direct consequentialism judges actions:",
    "options": [
      "By whether they conform to rules that produce good outcomes",
      "By the character traits of the agent",
      "Solely by the consequences of that action itself",
      "By their alignment with tradition"
    ],
    "answer": 2,
    "explanation": "Correct answer is C"
  },
  {
    "id": "ethics-q44",
    "text": "Indirect consequentialism judges actions by:",
    "options": [
      "Their specific consequences in each case",
      "Whether they conform to rules or character traits that tend to produce the best outcomes in general",
      "The emotional response they produce in others",
      "Their consistency with legal standards"
    ],
    "answer": 1,
    "explanation": "Correct answer is B"
  },
  {
    "id": "ethics-q45",
    "text": "Maximizing holds that suboptimal acts are still permissible as long as they are good enough.",
    "options": [
      "True",
      "False"
    ],
    "answer": 1,
    "explanation": "Correct answer is False"
  },
  {
    "id": "ethics-q46",
    "text": "The difference between satisficing and maximizing is:",
    "options": [
      "Satisficing requires the best possible outcome; maximizing allows for 'good enough'",
      "Maximizing requires the best possible outcome; satisficing allows for a sufficiently good outcome",
      "Both require the same level of outcomes",
      "Satisficing applies only to personal decisions"
    ],
    "answer": 1,
    "explanation": "Correct answer is B"
  },
  {
    "id": "ethics-q47",
    "text": "Which moral category refers to acts that are morally required?",
    "options": [
      "The permissible",
      "The supererogatory",
      "The obligatory",
      "The indirect"
    ],
    "answer": 2,
    "explanation": "Correct answer is C"
  },
  {
    "id": "ethics-q48",
    "text": "Supererogatory acts are best described as:",
    "options": [
      "Acts that are morally forbidden",
      "Acts that are morally required",
      "Acts that go beyond what is required, praiseworthy but not obligatory",
      "Acts that have no moral value"
    ],
    "answer": 2,
    "explanation": "Correct answer is C"
  },
  {
    "id": "ethics-q49",
    "text": "'Other-regarding concern' refers to focusing solely on one's own well-being.",
    "options": [
      "True",
      "False"
    ],
    "answer": 1,
    "explanation": "Correct answer is False"
  },
  {
    "id": "ethics-q50",
    "text": "Non-instrumental concern for others means:",
    "options": [
      "Using others as a means to achieve personal goals",
      "Valuing others not merely as a means, but as something intrinsically good in itself",
      "Caring for others only when it benefits you",
      "Helping others to gain social recognition"
    ],
    "answer": 1,
    "explanation": "Correct answer is B"
  },
  {
    "id": "ethics-q51",
    "text": "Ethical egoism claims that:",
    "options": [
      "An agent must always prioritize others over themselves",
      "An agent's moral obligation is to do what promotes their own good or welfare",
      "Morality requires equal consideration of all persons",
      "Self-interest is always morally wrong"
    ],
    "answer": 1,
    "explanation": "Correct answer is B"
  },
  {
    "id": "ethics-q52",
    "text": "According to agent-neutral consequentialism, who performs an action affects the moral evaluation of its consequences.",
    "options": [
      "True",
      "False"
    ],
    "answer": 1,
    "explanation": "Correct answer is False"
  },
  {
    "id": "ethics-q53",
    "text": "To 'promote' a value, according to the lecture, means to:",
    "options": [
      "Act on it or protect it at every opportunity",
      "Take steps that lead to its greater realization overall",
      "Maintain it regardless of consequences",
      "Enforce it through legal means"
    ],
    "answer": 1,
    "explanation": "Correct answer is B"
  },
  {
    "id": "ethics-q54",
    "text": "To 'honor' a value means to:",
    "options": [
      "Act on it or protect it at every opportunity",
      "Seek to maximize it across all situations",
      "Promote its realization in the future",
      "Share it with as many people as possible"
    ],
    "answer": 0,
    "explanation": "Correct answer is A"
  },
  {
    "id": "ethics-q55",
    "text": "Indirect consequentialism assesses every individual act directly by its own consequences.",
    "options": [
      "True",
      "False"
    ],
    "answer": 1,
    "explanation": "Correct answer is False"
  },
  {
    "id": "ethics-q56",
    "text": "Utilitarianism is the ethical theory that holds everyone should perform the act that brings about:",
    "options": [
      "The greatest personal benefit to the agent",
      "The greatest good or happiness to the greatest number of people",
      "Perfect adherence to moral rules",
      "Maximum spiritual fulfillment"
    ],
    "answer": 1,
    "explanation": "Correct answer is B"
  },
  {
    "id": "ethics-q57",
    "text": "According to Aguas (2019), the goal of utilitarianism is:",
    "options": [
      "Fulfilling divine commands",
      "Maximizing intellectual virtue",
      "Greatest happiness to the greatest number of people",
      "Obeying the law of the land"
    ],
    "answer": 2,
    "explanation": "Correct answer is C"
  },
  {
    "id": "ethics-q58",
    "text": "Jeremy Bentham and John Stuart Mill are the two most prominent classical utilitarians.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "explanation": "Correct answer is True"
  },
  {
    "id": "ethics-q59",
    "text": "Bentham's principle of utility approves or disapproves of actions according to:",
    "options": [
      "Whether they conform to religious law",
      "Their tendency to augment or diminish the happiness of the party whose interest is in question",
      "Whether they follow established social norms",
      "Their consistency with constitutional rights"
    ],
    "answer": 1,
    "explanation": "Correct answer is B"
  },
  {
    "id": "ethics-q60",
    "text": "Mill's greatest happiness principle states that the ultimate end is:",
    "options": [
      "Maximum political freedom",
      "Perfect compliance with moral rules",
      "An existence exempt as far as possible from pain and as rich as possible in enjoyment",
      "The fulfillment of rational self-interest"
    ],
    "answer": 2,
    "explanation": "Correct answer is C"
  },
  {
    "id": "ethics-q61",
    "text": "According to Mill, actions are right in proportion as they promote happiness and wrong as they tend to produce the reverse.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "explanation": "Correct answer is True"
  },
  {
    "id": "ethics-q62",
    "text": "Person-neutrality in utilitarianism means:",
    "options": [
      "Each person's interests count equally; no one's happiness has more weight based on identity",
      "Only the interests of the majority count",
      "Only affected parties near the agent matter",
      "The agent's interests are given priority"
    ],
    "answer": 0,
    "explanation": "Correct answer is A"
  },
  {
    "id": "ethics-q63",
    "text": "Temporal neutrality in utilitarianism means:",
    "options": [
      "Only present happiness counts in moral calculations",
      "Future happiness counts equally to present happiness",
      "Happiness experienced in the past has no moral value",
      "Time should not be wasted on moral reflection"
    ],
    "answer": 1,
    "explanation": "Correct answer is B"
  },
  {
    "id": "ethics-q64",
    "text": "Hedonistic utilitarianism holds that:",
    "options": [
      "Knowledge is the only intrinsic good",
      "Pleasure is the only intrinsic good and pain the only intrinsic evil",
      "Friendship and achievement are the highest goods",
      "Moral virtue is the ultimate end"
    ],
    "answer": 1,
    "explanation": "Correct answer is B"
  },
  {
    "id": "ethics-q65",
    "text": "Non-hedonistic utilitarianism holds that:",
    "options": [
      "Pain is morally neutral",
      "Only physical pleasure matters",
      "Other values beyond pleasure — such as knowledge or friendship — may count as intrinsic goods",
      "Happiness is irrelevant to morality"
    ],
    "answer": 2,
    "explanation": "Correct answer is C"
  },
  {
    "id": "ethics-q66",
    "text": "Act utilitarianism judges the morality of an action by whether it conforms to a rule that generally produces the greatest good.",
    "options": [
      "True",
      "False"
    ],
    "answer": 1,
    "explanation": "Correct answer is False"
  },
  {
    "id": "ethics-q67",
    "text": "Rule utilitarianism judges the morality of an action by:",
    "options": [
      "Whether the specific act produces the greatest happiness in this case",
      "Whether it conforms to a rule that, if generally followed, produces the greatest good",
      "Whether the agent intended to do good",
      "Whether the act is legally permitted"
    ],
    "answer": 1,
    "explanation": "Correct answer is B"
  },
  {
    "id": "ethics-q68",
    "text": "Act utilitarianism judges the morality of an action by:",
    "options": [
      "Conformity to general rules of conduct",
      "The character of the agent",
      "The specific consequences of that individual act in that situation",
      "Whether it follows divine commands"
    ],
    "answer": 2,
    "explanation": "Correct answer is C"
  },
  {
    "id": "ethics-q69",
    "text": "Bentham's utilitarianism is characterized as consequentialist, relativist, maximizing, and impartial.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "explanation": "Correct answer is True"
  },
  {
    "id": "ethics-q70",
    "text": "Which of the following is NOT a characteristic of Bentham's utilitarianism?",
    "options": [
      "Consequentialist",
      "Deontological",
      "Maximizing",
      "Impartial"
    ],
    "answer": 1,
    "explanation": "Correct answer is B"
  },
  {
    "id": "ethics-q71",
    "text": "In Bentham's felicific calculus, 'intensity' refers to:",
    "options": [
      "How long a pleasure lasts",
      "How certain the pleasure is to occur",
      "How strong or intense the pleasure is",
      "How many people share the pleasure"
    ],
    "answer": 2,
    "explanation": "Correct answer is C"
  },
  {
    "id": "ethics-q72",
    "text": "In Bentham's felicific calculus, 'duration' refers to:",
    "options": [
      "How intense the pleasure is",
      "How long the pleasure lasts",
      "How soon the pleasure follows the act",
      "How pure the pleasure is"
    ],
    "answer": 1,
    "explanation": "Correct answer is B"
  },
  {
    "id": "ethics-q73",
    "text": "In Bentham's felicific calculus, 'certainty' refers to:",
    "options": [
      "How many people experience the pleasure",
      "How quickly the pleasure follows the act",
      "The probability that the desired pleasure will actually be experienced",
      "Whether the pleasure will lead to more pleasure"
    ],
    "answer": 2,
    "explanation": "Correct answer is C"
  },
  {
    "id": "ethics-q74",
    "text": "'Propinquity' in the felicific calculus refers to:",
    "options": [
      "The purity of the pleasure",
      "The number of people experiencing it",
      "The temporal closeness between the act and the pleasure it produces",
      "The intensity of the pleasure"
    ],
    "answer": 2,
    "explanation": "Correct answer is C"
  },
  {
    "id": "ethics-q75",
    "text": "'Fecundity' in the felicific calculus refers to the probability that a pleasure will not be followed by pain.",
    "options": [
      "True",
      "False"
    ],
    "answer": 1,
    "explanation": "Correct answer is False"
  },
  {
    "id": "ethics-q76",
    "text": "'Purity' in the felicific calculus refers to:",
    "options": [
      "The intensity of the pleasure",
      "The probability that the pleasure will not be followed by pain",
      "The number of people sharing the pleasure",
      "How soon the pleasure is produced"
    ],
    "answer": 1,
    "explanation": "Correct answer is B"
  },
  {
    "id": "ethics-q77",
    "text": "'Extent' in the felicific calculus refers to:",
    "options": [
      "How long the pleasure lasts",
      "How intense the pleasure is",
      "The number of persons who experience the pleasure",
      "How pure the pleasure is"
    ],
    "answer": 2,
    "explanation": "Correct answer is C"
  },
  {
    "id": "ethics-q78",
    "text": "Mill agreed entirely with Bentham that the quantity of pleasure is all that matters.",
    "options": [
      "True",
      "False"
    ],
    "answer": 1,
    "explanation": "Correct answer is False"
  },
  {
    "id": "ethics-q79",
    "text": "Mill distinguished between higher and lower pleasures. Higher pleasures are:",
    "options": [
      "Bodily and sensory pleasures",
      "Intellectual and moral pleasures, which are superior even if they produce less quantity",
      "Any pleasures that last longer",
      "Pleasures shared by the greatest number of people"
    ],
    "answer": 1,
    "explanation": "Correct answer is B"
  },
  {
    "id": "ethics-q80",
    "text": "Mill's famous quote 'It is better to be a human being dissatisfied than a pig satisfied' illustrates:",
    "options": [
      "That Bentham's view is correct",
      "That the quality of pleasure matters, not just quantity",
      "That dissatisfaction is always morally superior",
      "That humans should avoid pleasure entirely"
    ],
    "answer": 1,
    "explanation": "Correct answer is B"
  },
  {
    "id": "ethics-q81",
    "text": "The utilitarian conception of impartiality assigns greater moral importance to benefits that fall on the agent themselves.",
    "options": [
      "True",
      "False"
    ],
    "answer": 1,
    "explanation": "Correct answer is False"
  },
  {
    "id": "ethics-q82",
    "text": "James Rachels describes utilitarianism as the attempt to:",
    "options": [
      "Follow God's commands perfectly",
      "Bring about as much happiness as possible in this world",
      "Apply abstract moral rules without exception",
      "Maximize personal virtue"
    ],
    "answer": 1,
    "explanation": "Correct answer is B"
  },
  {
    "id": "ethics-q83",
    "text": "Rule utilitarianism focuses on the consequences of each specific action.",
    "options": [
      "True",
      "False"
    ],
    "answer": 1,
    "explanation": "Correct answer is False"
  },
  {
    "id": "ethics-q84",
    "text": "In rule utilitarianism, the focus of consequences is on:",
    "options": [
      "The individual act",
      "The agent's intention",
      "The rule or rules followed",
      "The agent's character"
    ],
    "answer": 2,
    "explanation": "Correct answer is C"
  },
  {
    "id": "ethics-q85",
    "text": "Bentham's approach to happiness is primarily quantitative, while Mill introduces qualitative distinctions.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "explanation": "Correct answer is True"
  },
  {
    "id": "ethics-q86",
    "text": "Which utilitarian thinker introduced the felicific calculus?",
    "options": [
      "John Stuart Mill",
      "David Hume",
      "Jeremy Bentham",
      "James Rachels"
    ],
    "answer": 2,
    "explanation": "Correct answer is C"
  },
  {
    "id": "ethics-q87",
    "text": "Which utilitarian thinker argued that the quality of pleasure matters?",
    "options": [
      "Jeremy Bentham",
      "John Stuart Mill",
      "David Copp",
      "Peter Singer"
    ],
    "answer": 1,
    "explanation": "Correct answer is B"
  },
  {
    "id": "ethics-q88",
    "text": "According to David Copp, the utilitarian takes everyone's interests and balances benefits to some against harm to others to produce the best total outcome.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "explanation": "Correct answer is True"
  },
  {
    "id": "ethics-q89",
    "text": "The 'calculus of felicity' is also known as the:",
    "options": [
      "Happiness Index",
      "Felicific Calculus",
      "Utility Matrix",
      "Pleasure Standard"
    ],
    "answer": 1,
    "explanation": "Correct answer is B"
  },
  {
    "id": "ethics-q90",
    "text": "Utilitarianism holds that the morality of an action depends primarily on the agent's intentions rather than its outcomes.",
    "options": [
      "True",
      "False"
    ],
    "answer": 1,
    "explanation": "Correct answer is False"
  },
  {
    "id": "ethics-q91",
    "text": "Which of the following is the correct order of the three branches of ethics?",
    "options": [
      "Applied Ethics → Metaethics → Normative Ethics",
      "Metaethics → Normative Ethics → Applied Ethics",
      "Normative Ethics → Applied Ethics → Metaethics",
      "Metaethics → Applied Ethics → Normative Ethics"
    ],
    "answer": 1,
    "explanation": "Correct answer is B"
  },
  {
    "id": "ethics-q92",
    "text": "Ethical egoism is a form of consequentialism where the agent's own good is primary.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "explanation": "Correct answer is True"
  },
  {
    "id": "ethics-q93",
    "text": "A doctor follows a hospital rule against disclosing certain information to patients because that rule generally produces the best outcomes. This is an example of:",
    "options": [
      "Act utilitarianism",
      "Deontology",
      "Rule utilitarianism",
      "Ethical egoism"
    ],
    "answer": 2,
    "explanation": "Correct answer is C"
  },
  {
    "id": "ethics-q94",
    "text": "A person donates anonymously to a typhoon relief fund because it helps the most people. This reasoning most closely reflects:",
    "options": [
      "Ethical egoism",
      "Agent-relative consequentialism",
      "Impartial consequentialism",
      "Cultural ethical relativism"
    ],
    "answer": 2,
    "explanation": "Correct answer is C"
  },
  {
    "id": "ethics-q95",
    "text": "Metaethics is the branch of ethics that applies moral principles to specific real-world issues.",
    "options": [
      "True",
      "False"
    ],
    "answer": 1,
    "explanation": "Correct answer is False"
  },
  {
    "id": "ethics-q96",
    "text": "Which concept best explains why a person might feel justified in prioritizing their own family's welfare over strangers in a moral decision?",
    "options": [
      "Impartial consequentialism",
      "Agent-neutral consequentialism",
      "Partial consequentialism",
      "Scalar consequentialism"
    ],
    "answer": 2,
    "explanation": "Correct answer is C"
  },
  {
    "id": "ethics-q97",
    "text": "According to utilitarianism, the morality of an action is determined by whether it conforms to divine law.",
    "options": [
      "True",
      "False"
    ],
    "answer": 1,
    "explanation": "Correct answer is False"
  },
  {
    "id": "ethics-q98",
    "text": "Evaluating whether typhoon donors acted ethically based on whether their donations benefited the most people is an application of:",
    "options": [
      "Deontological ethics",
      "Utilitarianism",
      "Virtue ethics",
      "Metaethics"
    ],
    "answer": 1,
    "explanation": "Correct answer is B"
  },
  {
    "id": "ethics-q99",
    "text": "All three weeks of content — ethics and morality, consequentialism, and utilitarianism — belong under the broader umbrella of normative ethics.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "explanation": "Correct answer is True"
  },
  {
    "id": "ethics-q100",
    "text": "Which statement best summarizes the relationship between ethics and morality?",
    "options": [
      "They are completely unrelated disciplines",
      "Ethics is a branch of law, while morality is a branch of religion",
      "They have different etymological roots but are meaningfully connected; both concern right and wrong human conduct",
      "Morality is the scientific study of ethics"
    ],
    "answer": 2,
    "explanation": "Correct answer is C"
  }
]
  },
  self: {
    id: 'self',
    title: 'Understanding the Self',
    description: 'Examine personal identity, psychology, and cognitive development.',
    icon: '🧠',
    tags: ['Psychology', 'Identity'],
    questions: [
  {
    "id": "self-q1",
    "text": "Philosophy literally means:",
    "options": [
      "Love of science",
      "Love of wisdom",
      "Study of the self",
      "Study of nature"
    ],
    "answer": 1,
    "explanation": "Correct answer: B"
  },
  {
    "id": "self-q2",
    "text": "Which branch of philosophy deals with the fundamental nature of reality?",
    "options": [
      "Epistemology",
      "Ethics",
      "Metaphysics",
      "Aesthetics"
    ],
    "answer": 2,
    "explanation": "Correct answer: C"
  },
  {
    "id": "self-q3",
    "text": "Socrates viewed the self as synonymous with:",
    "options": [
      "The body",
      "The mind",
      "The soul",
      "The brain"
    ],
    "answer": 2,
    "explanation": "Correct answer: C"
  },
  {
    "id": "self-q4",
    "text": "According to Socrates, a happy and meaningful life can only be attained through:",
    "options": [
      "Wealth and power",
      "Virtue and self-knowledge",
      "Physical strength",
      "Social status"
    ],
    "answer": 1,
    "explanation": "Correct answer: B"
  },
  {
    "id": "self-q5",
    "text": "Socrates was sentenced to death by:",
    "options": [
      "Beheading",
      "Hanging",
      "Drinking poison",
      "Stoning"
    ],
    "answer": 2,
    "explanation": "Correct answer: C"
  },
  {
    "id": "self-q6",
    "text": "Socrates was accused of which of the following?",
    "options": [
      "Theft and corruption",
      "Impiety and corrupting the youth",
      "Treason and murder",
      "Heresy and witchcraft"
    ],
    "answer": 1,
    "explanation": "Correct answer: B"
  },
  {
    "id": "self-q7",
    "text": "Who wrote the accounts of Socrates and founded the Academy in Athens?",
    "options": [
      "Aristotle",
      "Plato",
      "Aquinas",
      "Descartes"
    ],
    "answer": 1,
    "explanation": "Correct answer: B"
  },
  {
    "id": "self-q8",
    "text": "Plato's Theory of Forms states that reality exists:",
    "options": [
      "Only in the physical world",
      "In the emotions of humans",
      "Beyond the physical world in a realm of perfect, unchanging Ideas",
      "Inside the human brain"
    ],
    "answer": 2,
    "explanation": "Correct answer: C"
  },
  {
    "id": "self-q9",
    "text": "According to Plato, which part of the soul contains our most basic biological needs like hunger and thirst?",
    "options": [
      "Rational",
      "Spirited",
      "Appetitive",
      "Sensitive"
    ],
    "answer": 2,
    "explanation": "Correct answer: C"
  },
  {
    "id": "self-q10",
    "text": "Which part of Plato's tripartite soul is considered the 'divine essence'?",
    "options": [
      "Appetitive",
      "Spirited",
      "Sensitive",
      "Rational"
    ],
    "answer": 3,
    "explanation": "Correct answer: D"
  },
  {
    "id": "self-q11",
    "text": "Aristotle believed that the purpose of a human being is to:",
    "options": [
      "Accumulate wealth",
      "Exercise reason",
      "Serve the gods",
      "Seek pleasure"
    ],
    "answer": 1,
    "explanation": "Correct answer: B"
  },
  {
    "id": "self-q12",
    "text": "Aristotle's concept of finding the balance between extremes is called:",
    "options": [
      "Eudaimonia",
      "The Golden Mean",
      "Arete alone",
      "The Middle Way"
    ],
    "answer": 1,
    "explanation": "Correct answer: B"
  },
  {
    "id": "self-q13",
    "text": "Which type of soul, according to Aristotle, is unique to humans?",
    "options": [
      "Vegetative",
      "Sensitive",
      "Rational",
      "Spiritual"
    ],
    "answer": 2,
    "explanation": "Correct answer: C"
  },
  {
    "id": "self-q14",
    "text": "St. Thomas Aquinas is famous for 'Christianizing' the works of:",
    "options": [
      "Plato",
      "Socrates",
      "Aristotle",
      "Descartes"
    ],
    "answer": 2,
    "explanation": "Correct answer: C"
  },
  {
    "id": "self-q15",
    "text": "According to Aquinas, which type of revelation is available to all humans through nature and correct reasoning?",
    "options": [
      "Supernatural revelation",
      "Divine revelation",
      "Natural revelation",
      "Scriptural revelation"
    ],
    "answer": 2,
    "explanation": "Correct answer: C"
  },
  {
    "id": "self-q16",
    "text": "Descartes is known as the:",
    "options": [
      "Father of Western Philosophy",
      "Father of Modern Philosophy",
      "Father of Ethics",
      "Father of Psychology"
    ],
    "answer": 1,
    "explanation": "Correct answer: B"
  },
  {
    "id": "self-q17",
    "text": "'I doubt therefore I think, I think therefore I am' is associated with:",
    "options": [
      "Plato",
      "Aristotle",
      "Rene Descartes",
      "John Locke"
    ],
    "answer": 2,
    "explanation": "Correct answer: C"
  },
  {
    "id": "self-q18",
    "text": "In Descartes' view, the 'Res Extensa' refers to:",
    "options": [
      "The soul",
      "The mind",
      "The body",
      "The spirit"
    ],
    "answer": 2,
    "explanation": "Correct answer: C"
  },
  {
    "id": "self-q19",
    "text": "Descartes believed that identity is primarily:",
    "options": [
      "Physical",
      "Social",
      "Mental",
      "Emotional"
    ],
    "answer": 2,
    "explanation": "Correct answer: C"
  },
  {
    "id": "self-q20",
    "text": "John Locke's concept of 'Tabula Rasa' means:",
    "options": [
      "Clean conscience",
      "Blank slate",
      "Pure soul",
      "Open mind"
    ],
    "answer": 1,
    "explanation": "Correct answer: B"
  },
  {
    "id": "self-q21",
    "text": "According to Locke, which of the following supports the continuity of personal identity over time?",
    "options": [
      "Physical appearance",
      "Memory",
      "Social status",
      "Reason"
    ],
    "answer": 1,
    "explanation": "Correct answer: B"
  },
  {
    "id": "self-q22",
    "text": "DNA stands for:",
    "options": [
      "Deoxyribose Nucleic Arrangement",
      "Deoxyribonucleic Acid",
      "Diatomic Nucleotide Array",
      "Dynamic Nucleic Acid"
    ],
    "answer": 1,
    "explanation": "Correct answer: B"
  },
  {
    "id": "self-q23",
    "text": "How many pairs of chromosomes does each human carry?",
    "options": [
      "21",
      "22",
      "23",
      "24"
    ],
    "answer": 2,
    "explanation": "Correct answer: C"
  },
  {
    "id": "self-q24",
    "text": "The XY chromosome combination indicates:",
    "options": [
      "Female",
      "Male",
      "Intersex",
      "Undetermined"
    ],
    "answer": 1,
    "explanation": "Correct answer: B"
  },
  {
    "id": "self-q25",
    "text": "Which of the following refers to the physical, observable expression of a trait?",
    "options": [
      "Genotype",
      "Heredity",
      "Phenotype",
      "Maturation"
    ],
    "answer": 2,
    "explanation": "Correct answer: C"
  },
  {
    "id": "self-q26",
    "text": "The Human Genome Project was carried out from:",
    "options": [
      "1980-1995",
      "1990-2003",
      "2000-2010",
      "1985-2000"
    ],
    "answer": 1,
    "explanation": "Correct answer: B"
  },
  {
    "id": "self-q27",
    "text": "Neurophilosophy is attributed to:",
    "options": [
      "Merleau-Ponty and Freud",
      "Paul and Patricia Churchland",
      "Maslow and Rogers",
      "Erikson and Bronfenbrenner"
    ],
    "answer": 1,
    "explanation": "Correct answer: B"
  },
  {
    "id": "self-q28",
    "text": "'We are our bodies' is a statement associated with:",
    "options": [
      "Freud",
      "Descartes",
      "Maurice Merleau-Ponty",
      "Aristotle"
    ],
    "answer": 2,
    "explanation": "Correct answer: C"
  },
  {
    "id": "self-q29",
    "text": "According to Edward Tylor (1871), culture is:",
    "options": [
      "Only language and tradition",
      "The complex whole including knowledge, belief, law, art, morals, and customs",
      "A set of rules imposed by governments",
      "Determined solely by geography"
    ],
    "answer": 1,
    "explanation": "Correct answer: B"
  },
  {
    "id": "self-q30",
    "text": "Which system in Bronfenbrenner's theory refers to institutions the individual has DIRECT contact with?",
    "options": [
      "Macrosystem",
      "Exosystem",
      "Mesosystem",
      "Microsystem"
    ],
    "answer": 3,
    "explanation": "Correct answer: D"
  },
  {
    "id": "self-q31",
    "text": "In Bronfenbrenner's model, the MACROSYSTEM refers to:",
    "options": [
      "The individual's family",
      "The school environment",
      "The larger cultural context",
      "The parent-teacher relationship"
    ],
    "answer": 2,
    "explanation": "Correct answer: C"
  },
  {
    "id": "self-q32",
    "text": "The Exosystem in Bronfenbrenner's theory involves:",
    "options": [
      "Direct contact with the individual",
      "Social settings the individual has no direct interaction with but that still affect development",
      "The cultural values of a society",
      "Peer-to-peer interactions"
    ],
    "answer": 1,
    "explanation": "Correct answer: B"
  },
  {
    "id": "self-q33",
    "text": "Hazel Rose Markus and Shinobu Kitayama developed the:",
    "options": [
      "Bioecological Systems Theory",
      "Individualism-Collectivism Model",
      "Hierarchy of Needs",
      "Theory of the Social Self"
    ],
    "answer": 1,
    "explanation": "Correct answer: B"
  },
  {
    "id": "self-q34",
    "text": "People who prioritize personal goals over group goals are described as:",
    "options": [
      "Collectivistic",
      "Sociocentric",
      "Individualistic",
      "Interdependent"
    ],
    "answer": 2,
    "explanation": "Correct answer: C"
  },
  {
    "id": "self-q35",
    "text": "According to George Herbert Mead, the 'I' refers to:",
    "options": [
      "The socialized self",
      "The unsocialized, authentic self",
      "The moral self",
      "The professional self"
    ],
    "answer": 1,
    "explanation": "Correct answer: B"
  },
  {
    "id": "self-q36",
    "text": "Mead's 'Me' is best described as:",
    "options": [
      "The self that acts on pure instinct",
      "The awareness of how others expect one to behave",
      "The biological self",
      "The unconscious self"
    ],
    "answer": 1,
    "explanation": "Correct answer: B"
  },
  {
    "id": "self-q37",
    "text": "Clifford Geertz described man as:",
    "options": [
      "A rational animal",
      "A social being",
      "An unfinished animal completed by culture",
      "A product of genetics alone"
    ],
    "answer": 2,
    "explanation": "Correct answer: C"
  },
  {
    "id": "self-q38",
    "text": "The Eastern perspective on the self is best described as:",
    "options": [
      "Egocentric and individualistic",
      "Sociocentric and collectivistic",
      "Purely rationalistic",
      "Faith-independent"
    ],
    "answer": 1,
    "explanation": "Correct answer: B"
  },
  {
    "id": "self-q39",
    "text": "Which doctrine of Buddhism states that nothing is permanent and no one is an independent entity?",
    "options": [
      "Dukkha",
      "Anicca",
      "Anatta",
      "Karma"
    ],
    "answer": 2,
    "explanation": "Correct answer: C"
  },
  {
    "id": "self-q40",
    "text": "In Buddhism, 'Dukkha' means:",
    "options": [
      "Impermanence",
      "No-self",
      "Suffering",
      "Enlightenment"
    ],
    "answer": 2,
    "explanation": "Correct answer: C"
  },
  {
    "id": "self-q41",
    "text": "The five Skandas of Buddhism do NOT include:",
    "options": [
      "Form",
      "Consciousness",
      "Karma",
      "Perception"
    ],
    "answer": 2,
    "explanation": "Correct answer: C"
  },
  {
    "id": "self-q42",
    "text": "In Hinduism, 'Brahman' refers to:",
    "options": [
      "A religious text",
      "A ritual practice",
      "The true nature of man or the Self",
      "A caste system"
    ],
    "answer": 2,
    "explanation": "Correct answer: C"
  },
  {
    "id": "self-q43",
    "text": "Lao Tzu is the founder of:",
    "options": [
      "Confucianism",
      "Buddhism",
      "Taoism",
      "Hinduism"
    ],
    "answer": 2,
    "explanation": "Correct answer: C"
  },
  {
    "id": "self-q44",
    "text": "Which philosopher said, 'Knowing others is wisdom. Knowing the self is enlightenment'?",
    "options": [
      "Confucius",
      "Buddha",
      "Lao Tzu",
      "Aristotle"
    ],
    "answer": 2,
    "explanation": "Correct answer: C"
  },
  {
    "id": "self-q45",
    "text": "Confucianism identifies personality as a product of:",
    "options": [
      "Genetics alone",
      "Divine will",
      "Upbringing and environment",
      "Personal choices only"
    ],
    "answer": 2,
    "explanation": "Correct answer: C"
  },
  {
    "id": "self-q46",
    "text": "Which of the following is NOT one of the Four Beginnings in Confucianism?",
    "options": [
      "Heart of Compassion",
      "Heart of Wisdom",
      "Heart of Courage",
      "Heart of Propriety"
    ],
    "answer": 2,
    "explanation": "Correct answer: C"
  },
  {
    "id": "self-q47",
    "text": "In Freud's structural model, which component operates entirely in the unconscious and seeks immediate gratification?",
    "options": [
      "Ego",
      "Superego",
      "Id",
      "Conscience"
    ],
    "answer": 2,
    "explanation": "Correct answer: C"
  },
  {
    "id": "self-q48",
    "text": "The Ego operates according to which principle?",
    "options": [
      "Pleasure principle",
      "Moral principle",
      "Reality principle",
      "Instinct principle"
    ],
    "answer": 2,
    "explanation": "Correct answer: C"
  },
  {
    "id": "self-q49",
    "text": "The Superego develops through:",
    "options": [
      "Biological maturation",
      "Internalizing parental and societal values",
      "Physical experiences",
      "Peer relationships"
    ],
    "answer": 1,
    "explanation": "Correct answer: B"
  },
  {
    "id": "self-q50",
    "text": "Which defense mechanism involves pushing distressing thoughts into the unconscious?",
    "options": [
      "Denial",
      "Projection",
      "Rationalization",
      "Repression"
    ],
    "answer": 3,
    "explanation": "Correct answer: D"
  },
  {
    "id": "self-q51",
    "text": "Attributing one's own unacceptable feelings to others is called:",
    "options": [
      "Repression",
      "Rationalization",
      "Projection",
      "Denial"
    ],
    "answer": 2,
    "explanation": "Correct answer: C"
  },
  {
    "id": "self-q52",
    "text": "Erikson's theory is based on which core principle?",
    "options": [
      "Pleasure principle",
      "Epigenetic principle",
      "Reality principle",
      "Actualization principle"
    ],
    "answer": 1,
    "explanation": "Correct answer: B"
  },
  {
    "id": "self-q53",
    "text": "According to Erikson, the virtue developed during the Trust vs. Mistrust stage is:",
    "options": [
      "Will",
      "Purpose",
      "Hope",
      "Fidelity"
    ],
    "answer": 2,
    "explanation": "Correct answer: C"
  },
  {
    "id": "self-q54",
    "text": "The Identity vs. Role Confusion stage occurs during:",
    "options": [
      "Early childhood",
      "School age",
      "Adolescence",
      "Young adulthood"
    ],
    "answer": 2,
    "explanation": "Correct answer: C"
  },
  {
    "id": "self-q55",
    "text": "The virtue of 'Fidelity' is associated with which Erikson stage?",
    "options": [
      "Trust vs. Mistrust",
      "Intimacy vs. Isolation",
      "Industry vs. Inferiority",
      "Identity vs. Role Confusion"
    ],
    "answer": 3,
    "explanation": "Correct answer: D"
  },
  {
    "id": "self-q56",
    "text": "Maslow's theory is best categorized under which school of psychology?",
    "options": [
      "Psychoanalytic",
      "Behaviorist",
      "Humanistic",
      "Cognitive"
    ],
    "answer": 2,
    "explanation": "Correct answer: C"
  },
  {
    "id": "self-q57",
    "text": "Which level is at the TOP of Maslow's Hierarchy of Needs?",
    "options": [
      "Esteem",
      "Safety",
      "Love and Belonging",
      "Self-Actualization"
    ],
    "answer": 3,
    "explanation": "Correct answer: D"
  },
  {
    "id": "self-q58",
    "text": "'Deficiency Needs' in Maslow's theory arise from:",
    "options": [
      "Desire to grow",
      "Lack",
      "Curiosity",
      "Social pressure"
    ],
    "answer": 1,
    "explanation": "Correct answer: B"
  },
  {
    "id": "self-q59",
    "text": "Carl Rogers believed every person is born with an innate drive toward growth called:",
    "options": [
      "The ego",
      "The actualizing tendency",
      "The id",
      "The superego"
    ],
    "answer": 1,
    "explanation": "Correct answer: B"
  },
  {
    "id": "self-q60",
    "text": "In Rogers' theory, 'incongruence' refers to:",
    "options": [
      "A perfect match between real and ideal self",
      "A mismatch between lived experience and self-concept",
      "Healthy self-development",
      "Achieving self-actualization"
    ],
    "answer": 1,
    "explanation": "Correct answer: B"
  },
  {
    "id": "self-q61",
    "text": "Unconditional positive regard in Rogers' theory means:",
    "options": [
      "Accepting a person only when they behave properly",
      "Rewarding good behavior",
      "Accepting a person without conditions",
      "Ignoring negative behaviors"
    ],
    "answer": 2,
    "explanation": "Correct answer: C"
  },
  {
    "id": "self-q62",
    "text": "The 'Halo Effect' is best described as:",
    "options": [
      "A bias where physical beauty determines intelligence",
      "A cognitive bias where one positive trait influences perception of other traits",
      "A mental disorder related to appearance",
      "A social phenomenon unique to the Philippines"
    ],
    "answer": 1,
    "explanation": "Correct answer: B"
  },
  {
    "id": "self-q63",
    "text": "Body Dysmorphic Disorder (BDD) involves:",
    "options": [
      "Healthy concern about physical appearance",
      "Obsessive preoccupation with minor or imagined physical flaws",
      "Eating disorders caused by poverty",
      "Skin conditions from poor hygiene"
    ],
    "answer": 1,
    "explanation": "Correct answer: B"
  },
  {
    "id": "self-q64",
    "text": "Anorexia Nervosa is primarily characterized by:",
    "options": [
      "Overeating followed by purging",
      "Abnormally low body weight due to extreme food restriction",
      "Obsessive exercise without dietary changes",
      "Sudden weight gain"
    ],
    "answer": 1,
    "explanation": "Correct answer: B"
  },
  {
    "id": "self-q65",
    "text": "The Biopsychosocial Model of Health considers which THREE factors?",
    "options": [
      "Genetics, environment, and luck",
      "Biological, psychological, and sociocultural factors",
      "Age, gender, and education",
      "Diet, exercise, and sleep"
    ],
    "answer": 1,
    "explanation": "Correct answer: B"
  },
  {
    "id": "self-q66",
    "text": "Biological sex is assigned based on:",
    "options": [
      "Gender expression",
      "Physical features and genitals at birth",
      "Hormonal tests",
      "Psychological assessment"
    ],
    "answer": 1,
    "explanation": "Correct answer: B"
  },
  {
    "id": "self-q67",
    "text": "The phase of love driven by testosterone and estrogen, involving excitement and fear of rejection, is:",
    "options": [
      "Attachment",
      "Attraction",
      "Lust",
      "Commitment"
    ],
    "answer": 2,
    "explanation": "Correct answer: C"
  },
  {
    "id": "self-q68",
    "text": "According to Sternberg's Triangular Theory of Love, which three components make up love?",
    "options": [
      "Lust, Attraction, Attachment",
      "Intimacy, Passion, Commitment",
      "Trust, Respect, Loyalty",
      "Affection, Desire, Devotion"
    ],
    "answer": 1,
    "explanation": "Correct answer: B"
  },
  {
    "id": "self-q69",
    "text": "Gender stereotypes are best described as:",
    "options": [
      "Legal definitions of gender roles",
      "Overgeneralized beliefs about individuals based solely on their gender",
      "Cultural practices that promote equality",
      "Individual personality traits"
    ],
    "answer": 1,
    "explanation": "Correct answer: B"
  },
  {
    "id": "self-q70",
    "text": "Sexism is defined as:",
    "options": [
      "A preference for one gender over another in art",
      "A discriminatory attitude about a person based solely on their sex",
      "A biological difference between males and females",
      "A cultural celebration of gender diversity"
    ],
    "answer": 1,
    "explanation": "Correct answer: B"
  },
  {
    "id": "self-q71",
    "text": "Socrates personally wrote extensive philosophical texts that are still read today.",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 1,
    "explanation": "The correct answer is FALSE"
  },
  {
    "id": "self-q72",
    "text": "Plato was a student of Socrates.",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0,
    "explanation": "The correct answer is TRUE"
  },
  {
    "id": "self-q73",
    "text": "According to Aristotle, the vegetative soul is unique to humans.",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 1,
    "explanation": "The correct answer is FALSE"
  },
  {
    "id": "self-q74",
    "text": "St. Thomas Aquinas agreed with Plato's idea that the soul is a prisoner of the body.",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 1,
    "explanation": "The correct answer is FALSE"
  },
  {
    "id": "self-q75",
    "text": "Descartes believed the body is the true self, not the mind.",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 1,
    "explanation": "The correct answer is FALSE"
  },
  {
    "id": "self-q76",
    "text": "John Locke believed humans are born with innate ideas.",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 1,
    "explanation": "The correct answer is FALSE"
  },
  {
    "id": "self-q77",
    "text": "No two individuals share the exact same DNA.",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0,
    "explanation": "The correct answer is TRUE"
  },
  {
    "id": "self-q78",
    "text": "The XX chromosome combination indicates a male individual.",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 1,
    "explanation": "The correct answer is FALSE"
  },
  {
    "id": "self-q79",
    "text": "Genotype refers to the physical, observable expression of a trait.",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 1,
    "explanation": "The correct answer is FALSE"
  },
  {
    "id": "self-q80",
    "text": "The Human Genome Project was completed in 2003.",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0,
    "explanation": "The correct answer is TRUE"
  },
  {
    "id": "self-q81",
    "text": "According to Merleau-Ponty, the self is a product of both idealist and realist standpoints.",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0,
    "explanation": "The correct answer is TRUE"
  },
  {
    "id": "self-q82",
    "text": "In Bronfenbrenner's theory, the Mesosystem refers to interconnections among microsystems.",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0,
    "explanation": "The correct answer is TRUE"
  },
  {
    "id": "self-q83",
    "text": "The Philippine society is traditionally perceived to be individualistic.",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 1,
    "explanation": "The correct answer is FALSE"
  },
  {
    "id": "self-q84",
    "text": "According to Mead, the actual self is achieved when the 'I' and 'Me' are congruent.",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0,
    "explanation": "The correct answer is TRUE"
  },
  {
    "id": "self-q85",
    "text": "Clifford Geertz believed in a fixed, universal human essence.",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 1,
    "explanation": "The correct answer is FALSE"
  },
  {
    "id": "self-q86",
    "text": "Western philosophy generally focuses on collectivistic nature.",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 1,
    "explanation": "The correct answer is FALSE"
  },
  {
    "id": "self-q87",
    "text": "Buddhism's Anatta doctrine teaches that there is no permanent, unchanging self.",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0,
    "explanation": "The correct answer is TRUE"
  },
  {
    "id": "self-q88",
    "text": "In Hinduism, the Atman is subject to reincarnation based on Karma.",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0,
    "explanation": "The correct answer is TRUE"
  },
  {
    "id": "self-q89",
    "text": "Lao Tzu believed that the ego helps us see our true self clearly.",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 1,
    "explanation": "The correct answer is FALSE"
  },
  {
    "id": "self-q90",
    "text": "Confucius considered himself a creator of new moral traditions, not a transmitter.",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 1,
    "explanation": "The correct answer is FALSE"
  },
  {
    "id": "self-q91",
    "text": "In Freud's model, the Id follows the reality principle.",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 1,
    "explanation": "The correct answer is FALSE"
  },
  {
    "id": "self-q92",
    "text": "The Superego contains both the conscience and the ego ideal.",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0,
    "explanation": "The correct answer is TRUE"
  },
  {
    "id": "self-q93",
    "text": "Erikson's theory covers personality development only up to adolescence.",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 1,
    "explanation": "The correct answer is FALSE"
  },
  {
    "id": "self-q94",
    "text": "In Erikson's Stage 8, individuals who look back with acceptance experience integrity.",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0,
    "explanation": "The correct answer is TRUE"
  },
  {
    "id": "self-q95",
    "text": "Maslow's Growth Needs arise from lack, not from desire to grow.",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 1,
    "explanation": "The correct answer is FALSE"
  },
  {
    "id": "self-q96",
    "text": "Carl Rogers believed every person is born with an actualizing tendency toward growth.",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0,
    "explanation": "The correct answer is TRUE"
  },
  {
    "id": "self-q97",
    "text": "Incongruence in Rogers' theory refers to a perfect match between the real and ideal self.",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 1,
    "explanation": "The correct answer is FALSE"
  },
  {
    "id": "self-q98",
    "text": "The Halo Effect can influence grades given to students by teachers.",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0,
    "explanation": "The correct answer is TRUE"
  },
  {
    "id": "self-q99",
    "text": "According to Sternberg, love consists of two components: passion and commitment.",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 1,
    "explanation": "The correct answer is FALSE"
  },
  {
    "id": "self-q100",
    "text": "Gender and biological sex refer to the same thing.",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 1,
    "explanation": "The correct answer is FALSE"
  }
]
  },
  world: {
    id: 'world',
    title: 'The Contemporary World',
    description: 'Analyze globalization, global economies, and modern societies.',
    icon: '🌍',
    tags: ['Global Studies', 'Modernity'],
    questions: [
  {
    "id": "world-q1",
    "text": "What does 'media' refer to?",
    "options": [
      "The different means of communication such as radio, television, and the internet",
      "The study of global economics",
      "A type of government propaganda",
      "Only printed materials like newspapers and books"
    ],
    "answer": 0,
    "explanation": "Correct answer: The different means of communication such as radio, television, and the internet"
  },
  {
    "id": "world-q2",
    "text": "Media plays a very important role in shaping what?",
    "options": [
      "The human mind",
      "Global trade",
      "National borders",
      "Economic policies"
    ],
    "answer": 0,
    "explanation": "Correct answer: The human mind"
  },
  {
    "id": "world-q3",
    "text": "How is culture defined in the Week 7-8 lesson?",
    "options": [
      "The way of life for an entire society",
      "The language spoken by a group of people",
      "The economic system of a nation",
      "The religious beliefs of a community"
    ],
    "answer": 0,
    "explanation": "Correct answer: The way of life for an entire society"
  },
  {
    "id": "world-q4",
    "text": "What does global media culture explore?",
    "options": [
      "The relationship between media, culture, and globalization",
      "The relationship between media and national governments",
      "The impact of sports on international relations",
      "The history of printing press technology"
    ],
    "answer": 0,
    "explanation": "Correct answer: The relationship between media, culture, and globalization"
  },
  {
    "id": "world-q5",
    "text": "What is cultural exchange in the context of global media?",
    "options": [
      "A continuous flow of ideas, values, and practices between different cultures enabled by media globalization",
      "The physical movement of people across borders",
      "Trade of artistic goods between nations",
      "Government-sponsored cultural programs"
    ],
    "answer": 0,
    "explanation": "Correct answer: A continuous flow of ideas, values, and practices between different cultures enabled by media globalization"
  },
  {
    "id": "world-q6",
    "text": "What is the digital divide?",
    "options": [
      "The uneven access to media and technology across different regions",
      "The gap between digital and print media",
      "The difference between social media platforms",
      "The distinction between old and new media"
    ],
    "answer": 0,
    "explanation": "Correct answer: The uneven access to media and technology across different regions"
  },
  {
    "id": "world-q7",
    "text": "What is glocalization?",
    "options": [
      "The adaptation of global media influences to fit local contexts, producing hybrid cultural forms",
      "A type of global satellite network",
      "The complete replacement of local culture by global culture",
      "A government policy restricting foreign media"
    ],
    "answer": 0,
    "explanation": "Correct answer: The adaptation of global media influences to fit local contexts, producing hybrid cultural forms"
  },
  {
    "id": "world-q8",
    "text": "What concern does cultural homogenization raise?",
    "options": [
      "That dominant global media content causes cultures to become more similar, eroding local distinctiveness",
      "That local cultures will resist all foreign influence",
      "That media technology will become too expensive",
      "That governments will take control of all media"
    ],
    "answer": 0,
    "explanation": "Correct answer: That dominant global media content causes cultures to become more similar, eroding local distinctiveness"
  },
  {
    "id": "world-q9",
    "text": "What are hybrid cultural forms?",
    "options": [
      "New cultural expressions that emerge when global media influences blend with local traditions",
      "Media products jointly produced by two governments",
      "Cultures that reject all foreign influence",
      "Traditional arts preserved without any outside influence"
    ],
    "answer": 0,
    "explanation": "Correct answer: New cultural expressions that emerge when global media influences blend with local traditions"
  },
  {
    "id": "world-q10",
    "text": "How does globalization relate to culture according to the lesson?",
    "options": [
      "Globalization creates a continuous cultural exchange where identity, nationality, religion, and way of life are continuously questioned and challenged",
      "Globalization eliminates all cultural differences",
      "Globalization has no impact on culture",
      "Globalization only affects economic systems, not culture"
    ],
    "answer": 0,
    "explanation": "Correct answer: Globalization creates a continuous cultural exchange where identity, nationality, religion, and way of life are continuously questioned and challenged"
  },
  {
    "id": "world-q11",
    "text": "What do global media promote in terms of communities?",
    "options": [
      "A restructuring of cultural and social communities and the creation of new communities",
      "The preservation of only traditional communities",
      "The elimination of all community structures",
      "The dominance of Western communities over others"
    ],
    "answer": 0,
    "explanation": "Correct answer: A restructuring of cultural and social communities and the creation of new communities"
  },
  {
    "id": "world-q12",
    "text": "Which of the following is cited as an example of media that advocates of globalization use to reach larger audiences?",
    "options": [
      "Social media groups",
      "Billboards",
      "Postal mail",
      "Town halls"
    ],
    "answer": 0,
    "explanation": "Correct answer: Social media groups"
  },
  {
    "id": "world-q13",
    "text": "What is cultural homogenization mainly associated with?",
    "options": [
      "The influence of dominant media conglomerates spreading uniform content globally",
      "Local governments restricting foreign content",
      "The rise of print newspapers",
      "Increased immigration between countries"
    ],
    "answer": 0,
    "explanation": "Correct answer: The influence of dominant media conglomerates spreading uniform content globally"
  },
  {
    "id": "world-q14",
    "text": "The digital divide can impact local cultures by leading to concerns about what?",
    "options": [
      "The preservation of cultural diversity",
      "The speed of internet connections",
      "The cost of television sets",
      "The number of languages taught in schools"
    ],
    "answer": 0,
    "explanation": "Correct answer: The preservation of cultural diversity"
  },
  {
    "id": "world-q15",
    "text": "How have digital platforms transformed the flow of information?",
    "options": [
      "They transcend geographical boundaries and enhance access to global content",
      "They have made information available only to wealthy nations",
      "They have reduced the amount of information available globally",
      "They have replaced all forms of traditional media completely"
    ],
    "answer": 0,
    "explanation": "Correct answer: They transcend geographical boundaries and enhance access to global content"
  },
  {
    "id": "world-q16",
    "text": "Which of the following is NOT listed as a type of media that globalization advocates use to reach audiences?",
    "options": [
      "Billboards",
      "Television",
      "Social media groups",
      "Books"
    ],
    "answer": 0,
    "explanation": "Correct answer: Billboards"
  },
  {
    "id": "world-q17",
    "text": "What was the earliest form of information for the masses?",
    "options": [
      "Information inscribed on stones, caves, and pillars",
      "Oral storytelling around fire",
      "Written scrolls on papyrus",
      "Clay tablets with cuneiform writing"
    ],
    "answer": 0,
    "explanation": "Correct answer: Information inscribed on stones, caves, and pillars"
  },
  {
    "id": "world-q18",
    "text": "How is the evolution of mass media described?",
    "options": [
      "An elongated journey marked with milestones that is still being continued",
      "A completed process that ended with the internet",
      "A decline caused by digital technology",
      "A sudden revolution that happened overnight"
    ],
    "answer": 0,
    "explanation": "Correct answer: An elongated journey marked with milestones that is still being continued"
  },
  {
    "id": "world-q19",
    "text": "What did modern mass communication bloom with?",
    "options": [
      "The printing press",
      "The invention of radio",
      "The creation of the internet",
      "The invention of the telephone"
    ],
    "answer": 0,
    "explanation": "Correct answer: The printing press"
  },
  {
    "id": "world-q20",
    "text": "According to the lesson, which of the following is listed as a media that creates advocates for globalization?",
    "options": [
      "Movies",
      "Podcasts",
      "Livestreams",
      "Physical newspapers only"
    ],
    "answer": 0,
    "explanation": "Correct answer: Movies"
  },
  {
    "id": "world-q21",
    "text": "How much information did U.S. households consume in 2008 according to the lesson?",
    "options": [
      "Approximately 3.6 zettabytes — a 350 percent increase since 1980",
      "1 zettabyte — a 100 percent increase since 1990",
      "2 zettabytes — a 200 percent increase since 1970",
      "5 zettabytes — a 500 percent increase since 1980"
    ],
    "answer": 0,
    "explanation": "Correct answer: Approximately 3.6 zettabytes — a 350 percent increase since 1980"
  },
  {
    "id": "world-q22",
    "text": "Americans are described as being exposed to media in which of the following places?",
    "options": [
      "Taxicabs, buses, classrooms, doctors' offices, highways, and airplanes",
      "Only at home and at work",
      "Only in schools and government buildings",
      "Only in entertainment venues like cinemas and theaters"
    ],
    "answer": 0,
    "explanation": "Correct answer: Taxicabs, buses, classrooms, doctors' offices, highways, and airplanes"
  },
  {
    "id": "world-q23",
    "text": "What fraction of U.S. households receive a daily newspaper?",
    "options": [
      "Half",
      "One quarter",
      "Three quarters",
      "Almost all"
    ],
    "answer": 0,
    "explanation": "Correct answer: Half"
  },
  {
    "id": "world-q24",
    "text": "What is the average number of magazine subscriptions per person in the U.S. cited in the lesson?",
    "options": [
      "1.9",
      "0.5",
      "3.5",
      "2.5"
    ],
    "answer": 0,
    "explanation": "Correct answer: 1.9"
  },
  {
    "id": "world-q25",
    "text": "What is a 'media conglomerate' as implied by the lesson?",
    "options": [
      "A dominant media company with significant global influence over content production and distribution",
      "A small independent media outlet",
      "A government-owned broadcasting corporation",
      "A media company that only produces local content"
    ],
    "answer": 0,
    "explanation": "Correct answer: A dominant media company with significant global influence over content production and distribution"
  },
  {
    "id": "world-q26",
    "text": "Global media cultures take part in globalization by doing what?",
    "options": [
      "Challenging existing cultures and creating new and alternative symbolic and cultural communities",
      "Preserving all traditional cultures without change",
      "Preventing all forms of cultural exchange",
      "Eliminating all cultural differences between nations"
    ],
    "answer": 0,
    "explanation": "Correct answer: Challenging existing cultures and creating new and alternative symbolic and cultural communities"
  },
  {
    "id": "world-q27",
    "text": "What is the relationship between globalization and the creation of new communities?",
    "options": [
      "Global media support the creation of new communities beyond traditional boundaries",
      "Globalization destroys all existing communities",
      "Only governments can create new communities in a globalized world",
      "Globalization prevents the formation of any new communities"
    ],
    "answer": 0,
    "explanation": "Correct answer: Global media support the creation of new communities beyond traditional boundaries"
  },
  {
    "id": "world-q28",
    "text": "What term describes the concern that dominant global media conglomerates spread uniform content?",
    "options": [
      "Cultural homogenization",
      "Glocalization",
      "Syncretism",
      "Cultural appropriation"
    ],
    "answer": 0,
    "explanation": "Correct answer: Cultural homogenization"
  },
  {
    "id": "world-q29",
    "text": "How is oral communication described in the media evolution timeline?",
    "options": [
      "It allowed the sharing of information and enabled humans to communicate and cooperate through language",
      "It was only used for religious ceremonies",
      "It was limited to communicating within small family units",
      "It replaced all earlier forms of non-verbal communication"
    ],
    "answer": 0,
    "explanation": "Correct answer: It allowed the sharing of information and enabled humans to communicate and cooperate through language"
  },
  {
    "id": "world-q30",
    "text": "What is mass media heading toward in the 21st century?",
    "options": [
      "The needs and wants of users, aimed at a greater good and making the world a more connected place",
      "Exclusive control by government entities",
      "Domination by a single global media company",
      "Reducing the amount of content available online"
    ],
    "answer": 0,
    "explanation": "Correct answer: The needs and wants of users, aimed at a greater good and making the world a more connected place"
  },
  {
    "id": "world-q31",
    "text": "What does the concept of glocalization lead to culturally?",
    "options": [
      "Hybrid cultural forms that reflect both global trends and local traditions",
      "The complete replacement of local culture by global standards",
      "The isolation of local cultures from all global influences",
      "The standardization of all cultures into one global culture"
    ],
    "answer": 0,
    "explanation": "Correct answer: Hybrid cultural forms that reflect both global trends and local traditions"
  },
  {
    "id": "world-q32",
    "text": "What is considered the start of the information revolution?",
    "options": [
      "The printing press",
      "The invention of radio",
      "The creation of the internet",
      "The development of television"
    ],
    "answer": 0,
    "explanation": "Correct answer: The printing press"
  },
  {
    "id": "world-q33",
    "text": "Which form of media allowed human communication over larger spaces and much longer time periods?",
    "options": [
      "Script",
      "Oral communication",
      "Radio",
      "Television"
    ],
    "answer": 0,
    "explanation": "Correct answer: Script"
  },
  {
    "id": "world-q34",
    "text": "Television is considered the most powerful and pervasive mass medium because it combined what?",
    "options": [
      "The visual and audio power of film with the accessibility of radio",
      "The reach of newspapers with the speed of radio",
      "The interactivity of computers with the visuals of cinema",
      "The portability of radio with the text of newspapers"
    ],
    "answer": 0,
    "explanation": "Correct answer: The visual and audio power of film with the accessibility of radio"
  },
  {
    "id": "world-q35",
    "text": "Radio quickly became a global medium by doing what?",
    "options": [
      "Reaching distant regions",
      "Broadcasting only in English",
      "Being available only to governments",
      "Replacing newspapers entirely"
    ],
    "answer": 0,
    "explanation": "Correct answer: Reaching distant regions"
  },
  {
    "id": "world-q36",
    "text": "What did the printing press transform according to the lesson?",
    "options": [
      "Social institutions such as schools, churches, and governments",
      "Only the economy",
      "Political borders",
      "Only scientific knowledge"
    ],
    "answer": 0,
    "explanation": "Correct answer: Social institutions such as schools, churches, and governments"
  },
  {
    "id": "world-q37",
    "text": "The 1990s to 2000s were marked by which three major developments?",
    "options": [
      "Invention of the internet, birth of social networking sites, and emergence of social media",
      "Invention of television, birth of radio broadcasting, and emergence of cable news",
      "Invention of smartphones, birth of streaming services, and emergence of podcasts",
      "Invention of VCRs, birth of personal computers, and emergence of email"
    ],
    "answer": 0,
    "explanation": "Correct answer: Invention of the internet, birth of social networking sites, and emergence of social media"
  },
  {
    "id": "world-q38",
    "text": "What media development is associated with the 'Golden Age' in the early 1900s?",
    "options": [
      "The Golden Age of Television, Radio, and Cinema",
      "The Golden Age of Print Journalism",
      "The Golden Age of the Internet",
      "The Golden Age of Satellite Communications"
    ],
    "answer": 0,
    "explanation": "Correct answer: The Golden Age of Television, Radio, and Cinema"
  },
  {
    "id": "world-q39",
    "text": "When was the first printing press invented?",
    "options": [
      "1440",
      "1041",
      "1774",
      "1477"
    ],
    "answer": 0,
    "explanation": "Correct answer: 1440"
  },
  {
    "id": "world-q40",
    "text": "Who invented the first printing press?",
    "options": [
      "Johannes Gutenberg",
      "William Caxton",
      "Guglielmo Marconi",
      "Thomas Edison"
    ],
    "answer": 0,
    "explanation": "Correct answer: Johannes Gutenberg"
  },
  {
    "id": "world-q41",
    "text": "What happened in 1041 in the history of media?",
    "options": [
      "Movable clay type printing was developed in China",
      "The first printing press was invented in Germany",
      "The first newspaper was published in England",
      "The first telegraph was transmitted"
    ],
    "answer": 0,
    "explanation": "Correct answer: Movable clay type printing was developed in China"
  },
  {
    "id": "world-q42",
    "text": "The first printed advertisement in a book was produced in 1477 by whom?",
    "options": [
      "William Caxton",
      "Johannes Gutenberg",
      "Alexander Graham Bell",
      "John Logie Baird"
    ],
    "answer": 0,
    "explanation": "Correct answer: William Caxton"
  },
  {
    "id": "world-q43",
    "text": "Who invented the electric telegraph in 1774?",
    "options": [
      "George Louis Lesage",
      "Alexander Graham Bell",
      "Thomas Alva Edison",
      "Guglielmo Marconi"
    ],
    "answer": 0,
    "explanation": "Correct answer: George Louis Lesage"
  },
  {
    "id": "world-q44",
    "text": "Who invented the telephone in 1876?",
    "options": [
      "Alexander Graham Bell",
      "Thomas Edison",
      "W.S. Burt",
      "George Louis Lesage"
    ],
    "answer": 0,
    "explanation": "Correct answer: Alexander Graham Bell"
  },
  {
    "id": "world-q45",
    "text": "Who invented the phonograph in 1877?",
    "options": [
      "Thomas Alva Edison",
      "Alexander Graham Bell",
      "Guglielmo Marconi",
      "John Logie Baird"
    ],
    "answer": 0,
    "explanation": "Correct answer: Thomas Alva Edison"
  },
  {
    "id": "world-q46",
    "text": "Who invented the radio in 1894?",
    "options": [
      "Guglielmo Marconi",
      "Thomas Edison",
      "George Louis Lesage",
      "Philo Farnsworth"
    ],
    "answer": 0,
    "explanation": "Correct answer: Guglielmo Marconi"
  },
  {
    "id": "world-q47",
    "text": "When was the first color movie, Cupid Angling, shot?",
    "options": [
      "1918",
      "1920",
      "1923",
      "1927"
    ],
    "answer": 0,
    "explanation": "Correct answer: 1918"
  },
  {
    "id": "world-q48",
    "text": "Who is credited with the invention of television?",
    "options": [
      "John Logie Baird",
      "Philo Farnsworth",
      "Thomas Edison",
      "Guglielmo Marconi"
    ],
    "answer": 0,
    "explanation": "Correct answer: John Logie Baird"
  },
  {
    "id": "world-q49",
    "text": "What milestone in media occurred in 1923?",
    "options": [
      "The first news magazine, TIME, was launched",
      "The first television broadcast was made",
      "The first radio commercial aired",
      "The first color movie was shot"
    ],
    "answer": 0,
    "explanation": "Correct answer: The first news magazine, TIME, was launched"
  },
  {
    "id": "world-q50",
    "text": "Who made the first TV transmission in 1927?",
    "options": [
      "Philo Farnsworth",
      "John Logie Baird",
      "Thomas Edison",
      "Guglielmo Marconi"
    ],
    "answer": 0,
    "explanation": "Correct answer: Philo Farnsworth"
  },
  {
    "id": "world-q51",
    "text": "What does KDKA radio station represent in media history?",
    "options": [
      "The first radio commercial broadcast station, a subsidiary of Westinghouse",
      "The first television network",
      "The first public internet service",
      "The first satellite radio station"
    ],
    "answer": 0,
    "explanation": "Correct answer: The first radio commercial broadcast station, a subsidiary of Westinghouse"
  },
  {
    "id": "world-q52",
    "text": "What year did black and white TV become mainstream?",
    "options": [
      "1950",
      "1940",
      "1960",
      "1963"
    ],
    "answer": 0,
    "explanation": "Correct answer: 1950"
  },
  {
    "id": "world-q53",
    "text": "When did FM radio rise to prominence?",
    "options": [
      "1960",
      "1950",
      "1972",
      "1973"
    ],
    "answer": 0,
    "explanation": "Correct answer: 1960"
  },
  {
    "id": "world-q54",
    "text": "Who developed email in 1972?",
    "options": [
      "Ray Tomlinson",
      "Tim Berners-Lee",
      "Bill Gates",
      "Martin Cooper"
    ],
    "answer": 0,
    "explanation": "Correct answer: Ray Tomlinson"
  },
  {
    "id": "world-q55",
    "text": "Who created the first handheld mobile phone in 1973?",
    "options": [
      "John Mitchell and Martin Cooper",
      "Ray Tomlinson",
      "Steve Jobs",
      "Bill Gates"
    ],
    "answer": 0,
    "explanation": "Correct answer: John Mitchell and Martin Cooper"
  },
  {
    "id": "world-q56",
    "text": "In what year did VCRs become available?",
    "options": [
      "1975",
      "1972",
      "1980",
      "1985"
    ],
    "answer": 0,
    "explanation": "Correct answer: 1975"
  },
  {
    "id": "world-q57",
    "text": "What was the first online newspaper and when did it debut?",
    "options": [
      "Columbus Dispatch in 1980",
      "TIME magazine in 1923",
      "The New York Times in 1995",
      "Washington Post in 1985"
    ],
    "answer": 0,
    "explanation": "Correct answer: Columbus Dispatch in 1980"
  },
  {
    "id": "world-q58",
    "text": "When was the IBM Personal Computer introduced?",
    "options": [
      "1981",
      "1980",
      "1985",
      "1986"
    ],
    "answer": 0,
    "explanation": "Correct answer: 1981"
  },
  {
    "id": "world-q59",
    "text": "When was Microsoft Windows launched?",
    "options": [
      "1985",
      "1981",
      "1986",
      "1991"
    ],
    "answer": 0,
    "explanation": "Correct answer: 1985"
  },
  {
    "id": "world-q60",
    "text": "What was MCI Mail, launched in 1986?",
    "options": [
      "The first commercial email service",
      "The first internet browser",
      "The first online newspaper",
      "The first social media platform"
    ],
    "answer": 0,
    "explanation": "Correct answer: The first commercial email service"
  },
  {
    "id": "world-q61",
    "text": "Who created the World Wide Web, and in what year?",
    "options": [
      "Sir Timothy John-Berners Lee in 1991",
      "Bill Gates in 1985",
      "Steve Jobs in 1995",
      "Ray Tomlinson in 1972"
    ],
    "answer": 0,
    "explanation": "Correct answer: Sir Timothy John-Berners Lee in 1991"
  },
  {
    "id": "world-q62",
    "text": "When was Microsoft Internet Explorer launched?",
    "options": [
      "1995",
      "1991",
      "1997",
      "2001"
    ],
    "answer": 0,
    "explanation": "Correct answer: 1995"
  },
  {
    "id": "world-q63",
    "text": "What replaced VCRs in 1997?",
    "options": [
      "DVDs",
      "Blu-ray",
      "Online streaming",
      "Hard disk recorders"
    ],
    "answer": 0,
    "explanation": "Correct answer: DVDs"
  },
  {
    "id": "world-q64",
    "text": "When were instant messaging services introduced?",
    "options": [
      "2001",
      "1997",
      "2002",
      "2004"
    ],
    "answer": 0,
    "explanation": "Correct answer: 2001"
  },
  {
    "id": "world-q65",
    "text": "What was launched in 2002 according to the media timeline?",
    "options": [
      "Satellite radio",
      "Facebook",
      "YouTube",
      "Instant messaging"
    ],
    "answer": 0,
    "explanation": "Correct answer: Satellite radio"
  },
  {
    "id": "world-q66",
    "text": "Which social media platform was launched in 2004?",
    "options": [
      "Facebook",
      "YouTube",
      "Twitter",
      "Instagram"
    ],
    "answer": 0,
    "explanation": "Correct answer: Facebook"
  },
  {
    "id": "world-q67",
    "text": "Which platform was launched in 2005?",
    "options": [
      "YouTube",
      "Facebook",
      "Twitter",
      "Instagram"
    ],
    "answer": 0,
    "explanation": "Correct answer: YouTube"
  },
  {
    "id": "world-q68",
    "text": "Twitter was launched in which year?",
    "options": [
      "2006",
      "2004",
      "2005",
      "2007"
    ],
    "answer": 0,
    "explanation": "Correct answer: 2006"
  },
  {
    "id": "world-q69",
    "text": "Which platform was launched in 2007?",
    "options": [
      "Tumblr",
      "Facebook",
      "Twitter",
      "Instagram"
    ],
    "answer": 0,
    "explanation": "Correct answer: Tumblr"
  },
  {
    "id": "world-q70",
    "text": "Which platform was launched in 2010?",
    "options": [
      "Instagram",
      "Twitter",
      "Tumblr",
      "YouTube"
    ],
    "answer": 0,
    "explanation": "Correct answer: Instagram"
  },
  {
    "id": "world-q71",
    "text": "The typewriter was invented in 1829 by whom?",
    "options": [
      "W.S. Burt",
      "Thomas Edison",
      "Alexander Graham Bell",
      "George Louis Lesage"
    ],
    "answer": 0,
    "explanation": "Correct answer: W.S. Burt"
  },
  {
    "id": "world-q72",
    "text": "Audio cassettes were introduced in which year?",
    "options": [
      "1963",
      "1960",
      "1972",
      "1975"
    ],
    "answer": 0,
    "explanation": "Correct answer: 1963"
  },
  {
    "id": "world-q73",
    "text": "Color television became mainstream in which year?",
    "options": [
      "1980",
      "1975",
      "1963",
      "1950"
    ],
    "answer": 0,
    "explanation": "Correct answer: 1980"
  },
  {
    "id": "world-q74",
    "text": "What did community antenna television in 1940 represent?",
    "options": [
      "Early cable television",
      "The first color television broadcast",
      "The first television news broadcast",
      "The invention of satellite television"
    ],
    "answer": 0,
    "explanation": "Correct answer: Early cable television"
  },
  {
    "id": "world-q75",
    "text": "What is the significance of 1991 in media history?",
    "options": [
      "The World Wide Web was created by Sir Timothy John-Berners Lee",
      "The first social media platform was launched",
      "The first smartphone was invented",
      "Facebook was launched"
    ],
    "answer": 0,
    "explanation": "Correct answer: The World Wide Web was created by Sir Timothy John-Berners Lee"
  },
  {
    "id": "world-q76",
    "text": "What is K-Pop?",
    "options": [
      "A global music and entertainment phenomenon originating in South Korea characterized by catchy melodies, slick choreography, and high production value",
      "A type of traditional Korean folk music",
      "A Japanese music genre",
      "A Chinese entertainment industry"
    ],
    "answer": 0,
    "explanation": "Correct answer: A global music and entertainment phenomenon originating in South Korea characterized by catchy melodies, slick choreography, and high production value"
  },
  {
    "id": "world-q77",
    "text": "What is the Hallyu?",
    "options": [
      "The Korean Wave — the spread of South Korean culture globally beginning in the late 1990s",
      "A type of Korean traditional dance",
      "A South Korean military strategy",
      "A North Korean propaganda campaign"
    ],
    "answer": 0,
    "explanation": "Correct answer: The Korean Wave — the spread of South Korean culture globally beginning in the late 1990s"
  },
  {
    "id": "world-q78",
    "text": "Which event is cited as a moment that 'broke the internet' and catapulted K-Pop to international stardom?",
    "options": [
      "PSY's Gangnam Style in 2012",
      "BTS winning a Grammy Award",
      "BLACKPINK performing at Coachella",
      "EXO releasing their first album"
    ],
    "answer": 0,
    "explanation": "Correct answer: PSY's Gangnam Style in 2012"
  },
  {
    "id": "world-q79",
    "text": "Which K-Pop group is mentioned for conquering the world with record-shattering albums?",
    "options": [
      "BTS",
      "EXO",
      "BLACKPINK",
      "PSY"
    ],
    "answer": 0,
    "explanation": "Correct answer: BTS"
  },
  {
    "id": "world-q80",
    "text": "How is BLACKPINK described in the lesson?",
    "options": [
      "A group that redefined girl groups with a mix of pop, rap, and high fashion",
      "A group focused exclusively on traditional Korean music",
      "The first K-Pop group to perform in the United States",
      "A group known mainly for acting in K-Dramas"
    ],
    "answer": 0,
    "explanation": "Correct answer: A group that redefined girl groups with a mix of pop, rap, and high fashion"
  },
  {
    "id": "world-q81",
    "text": "What is soft power as it relates to K-Pop?",
    "options": [
      "A country's ability to influence others through cultural and ideological appeal rather than force",
      "The physical strength of K-Pop performers",
      "South Korea's military capabilities",
      "The economic power of South Korean corporations"
    ],
    "answer": 0,
    "explanation": "Correct answer: A country's ability to influence others through cultural and ideological appeal rather than force"
  },
  {
    "id": "world-q82",
    "text": "What makes K-Pop fandoms distinctive according to the lesson?",
    "options": [
      "They are among the most passionate, dedicated, and organized in the world",
      "They are the smallest fandoms in pop music",
      "They exclusively follow one artist for life",
      "They only exist in South Korea and Japan"
    ],
    "answer": 0,
    "explanation": "Correct answer: They are among the most passionate, dedicated, and organized in the world"
  },
  {
    "id": "world-q83",
    "text": "How has K-Pop elevated its appeal according to the lesson?",
    "options": [
      "By reaching international markets and cultivating a global image of inclusivity, including more racially and physically diverse idols",
      "By focusing exclusively on South Korean audiences",
      "By producing music only in English",
      "By avoiding collaborations with Western artists"
    ],
    "answer": 0,
    "explanation": "Correct answer: By reaching international markets and cultivating a global image of inclusivity, including more racially and physically diverse idols"
  },
  {
    "id": "world-q84",
    "text": "What is Bollywood?",
    "options": [
      "India's massive film industry, one of the largest in the world, producing over a thousand films a year",
      "A type of Indian classical dance",
      "Pakistan's national film industry",
      "A music production company only"
    ],
    "answer": 0,
    "explanation": "Correct answer: India's massive film industry, one of the largest in the world, producing over a thousand films a year"
  },
  {
    "id": "world-q85",
    "text": "Bollywood's influence traditionally extended across which regions?",
    "options": [
      "South Asia, the Middle East, and Africa",
      "Only South Asia",
      "North America and Europe",
      "East Asia and Southeast Asia"
    ],
    "answer": 0,
    "explanation": "Correct answer: South Asia, the Middle East, and Africa"
  },
  {
    "id": "world-q86",
    "text": "Which Bollywood film won an Oscar for Best Original Song?",
    "options": [
      "RRR",
      "Lagaan",
      "Slumdog Millionaire",
      "Devdas"
    ],
    "answer": 0,
    "explanation": "Correct answer: RRR"
  },
  {
    "id": "world-q87",
    "text": "Which Bollywood actresses are mentioned as now being Hollywood regulars?",
    "options": [
      "Priyanka Chopra and Deepika Padukone",
      "Aishwarya Rai and Rani Mukerji",
      "Kareena Kapoor and Katrina Kaif",
      "Kajol and Preity Zinta"
    ],
    "answer": 0,
    "explanation": "Correct answer: Priyanka Chopra and Deepika Padukone"
  },
  {
    "id": "world-q88",
    "text": "What brought Bollywood films to global audiences on streaming platforms?",
    "options": [
      "Platforms like Netflix and Amazon Prime",
      "Government-funded international distribution",
      "Hollywood studio partnerships",
      "Only film festivals like Cannes and Venice"
    ],
    "answer": 0,
    "explanation": "Correct answer: Platforms like Netflix and Amazon Prime"
  },
  {
    "id": "world-q89",
    "text": "Which anime series are mentioned as worldwide sensations?",
    "options": [
      "Attack on Titan, One Piece, and Demon Slayer",
      "Naruto, Dragon Ball Z, and Pokemon",
      "Spirited Away, My Neighbor Totoro, and Howl's Moving Castle",
      "Sailor Moon, Cardcaptor Sakura, and Tokyo Ghoul"
    ],
    "answer": 0,
    "explanation": "Correct answer: Attack on Titan, One Piece, and Demon Slayer"
  },
  {
    "id": "world-q90",
    "text": "What does the lesson say about anime and manga's status today?",
    "options": [
      "Once considered niche, anime is now mainstream and manga is outselling Western comics by huge margins",
      "Anime remains niche and only popular in Japan",
      "Anime has declined in popularity in recent years",
      "Manga has been completely replaced by digital comics"
    ],
    "answer": 0,
    "explanation": "Correct answer: Once considered niche, anime is now mainstream and manga is outselling Western comics by huge margins"
  },
  {
    "id": "world-q91",
    "text": "Japanese animation studios mentioned in the lesson include which ones?",
    "options": [
      "Studio Ghibli and MAPPA",
      "Disney and Pixar",
      "DreamWorks and Illumination",
      "Toei Animation and Sunrise"
    ],
    "answer": 0,
    "explanation": "Correct answer: Studio Ghibli and MAPPA"
  },
  {
    "id": "world-q92",
    "text": "What is cultural appropriation?",
    "options": [
      "The adoption of elements of one culture by another, often lacking respect or understanding for the original culture",
      "The preservation of traditional cultural practices",
      "The creation of new cultural forms through respectful exchange",
      "A government policy that promotes cultural diversity"
    ],
    "answer": 0,
    "explanation": "Correct answer: The adoption of elements of one culture by another, often lacking respect or understanding for the original culture"
  },
  {
    "id": "world-q93",
    "text": "What problematic aspect of global media is raised in the lesson regarding BAME women?",
    "options": [
      "Fetishization — racial diversity is acknowledged but BAME women are exoticized and hypersexualized rather than authentically represented",
      "Underrepresentation of BAME women as villains in global media",
      "BAME women being cast in too many lead roles",
      "BAME women being excluded from social media entirely"
    ],
    "answer": 0,
    "explanation": "Correct answer: Fetishization — racial diversity is acknowledged but BAME women are exoticized and hypersexualized rather than authentically represented"
  },
  {
    "id": "world-q94",
    "text": "What does 'BAME' stand for?",
    "options": [
      "Black, Asian, and Minority Ethnic",
      "British, American, and Middle Eastern",
      "Bold, Ambitious, and Modern Entertainment",
      "Broadcast, Animated, and Media Entertainment"
    ],
    "answer": 0,
    "explanation": "Correct answer: Black, Asian, and Minority Ethnic"
  },
  {
    "id": "world-q95",
    "text": "What does the colonial legacy in beauty standards refer to in the context of Bollywood?",
    "options": [
      "The persistent influence of British colonial history on idealized beauty standards in Bollywood",
      "The preference for traditional Indian beauty in Bollywood films",
      "Bollywood's rejection of all Western beauty standards",
      "The influence of Chinese beauty standards on Indian cinema"
    ],
    "answer": 0,
    "explanation": "Correct answer: The persistent influence of British colonial history on idealized beauty standards in Bollywood"
  },
  {
    "id": "world-q96",
    "text": "What is K-beauty?",
    "options": [
      "South Korean skincare and beauty routines that have gained global influence",
      "A type of Korean traditional makeup for ceremonies",
      "A K-Pop music video aesthetic",
      "A Korean government beauty standard program"
    ],
    "answer": 0,
    "explanation": "Correct answer: South Korean skincare and beauty routines that have gained global influence"
  },
  {
    "id": "world-q97",
    "text": "What does the lesson say about Asian food culture's global spread?",
    "options": [
      "Korean BBQ, Japanese ramen, and bubble tea have made their way into every corner of the world, influencing how people eat, cook, and socialize",
      "Asian food culture remains exclusively popular in Asia",
      "Only sushi has gained global acceptance",
      "Asian food culture is popular only in Western countries"
    ],
    "answer": 0,
    "explanation": "Correct answer: Korean BBQ, Japanese ramen, and bubble tea have made their way into every corner of the world, influencing how people eat, cook, and socialize"
  },
  {
    "id": "world-q98",
    "text": "What overall concern does the lesson raise about Asian pop culture's global rise?",
    "options": [
      "While breaking barriers, it continues to reflect deeper issues of representation, cultural appropriation, and the ongoing legacy of colonialism",
      "Asian pop culture has fully solved all representation issues",
      "Cultural exchange between Asia and the West is entirely negative",
      "Asian pop culture has replaced all Western entertainment globally"
    ],
    "answer": 0,
    "explanation": "Correct answer: While breaking barriers, it continues to reflect deeper issues of representation, cultural appropriation, and the ongoing legacy of colonialism"
  },
  {
    "id": "world-q99",
    "text": "K-Pop began as a South Korean industry inspired by what?",
    "options": [
      "American and Japanese pop music",
      "Traditional Korean folk music",
      "British rock music",
      "Chinese classical music"
    ],
    "answer": 0,
    "explanation": "Correct answer: American and Japanese pop music"
  },
  {
    "id": "world-q100",
    "text": "Which early K-Pop idols are mentioned as part of the Hallyu's beginning?",
    "options": [
      "H.O.T and BoA",
      "BTS and BLACKPINK",
      "PSY and EXO",
      "Girls' Generation and Super Junior"
    ],
    "answer": 0,
    "explanation": "Correct answer: H.O.T and BoA"
  },
  {
    "id": "world-q101",
    "text": "What does the lesson say about the line between Eastern and Western media?",
    "options": [
      "The lines are blurring, with cultural exchange thriving, but the need for genuine and respectful representation is more pressing than ever",
      "Eastern and Western media have merged completely into one",
      "Eastern media has completely replaced Western media",
      "Western media has suppressed all Eastern cultural expression"
    ],
    "answer": 0,
    "explanation": "Correct answer: The lines are blurring, with cultural exchange thriving, but the need for genuine and respectful representation is more pressing than ever"
  },
  {
    "id": "world-q102",
    "text": "What global trend in beauty and fashion does the lesson credit K-Pop idols and Bollywood stars with?",
    "options": [
      "Setting global fashion trends and leading collaborations with Western brands",
      "Creating a uniform global beauty standard based on Western ideals",
      "Promoting exclusively South Asian and Korean fashion",
      "Rejecting all Western fashion influence"
    ],
    "answer": 0,
    "explanation": "Correct answer: Setting global fashion trends and leading collaborations with Western brands"
  },
  {
    "id": "world-q103",
    "text": "Which award is mentioned that elevated Bollywood's global profile?",
    "options": [
      "An Oscar for Best Original Song for RRR",
      "A Grammy Award for Best World Music Album",
      "A Golden Globe for Best Foreign Film",
      "A Cannes Palme d'Or"
    ],
    "answer": 0,
    "explanation": "Correct answer: An Oscar for Best Original Song for RRR"
  },
  {
    "id": "world-q104",
    "text": "Bollywood is described as producing drama, romance, action, and social commentary 'wrapped in' what?",
    "options": [
      "Dazzling color and emotions",
      "Minimalist visual aesthetics",
      "Black-and-white cinematography",
      "Only classical Indian music scores"
    ],
    "answer": 0,
    "explanation": "Correct answer: Dazzling color and emotions"
  },
  {
    "id": "world-q105",
    "text": "What did the rise of social media and YouTube do for K-Pop?",
    "options": [
      "Catapulted K-Pop into international stardom",
      "Caused a temporary decline in K-Pop's popularity",
      "Restricted K-Pop to only Asian markets",
      "Made K-Pop only popular among teenagers"
    ],
    "answer": 0,
    "explanation": "Correct answer: Catapulted K-Pop into international stardom"
  },
  {
    "id": "world-q106",
    "text": "How has K-Pop changed over the last decade regarding diversity?",
    "options": [
      "It has embraced more racially and physically diverse idols, reflecting a broader cultural shift and South Korea's soft power political strategy",
      "It has become more restrictive, favoring only Korean idols",
      "Diversity in K-Pop remains unchanged from its origins",
      "K-Pop has rejected diversity in favor of a single uniform look"
    ],
    "answer": 0,
    "explanation": "Correct answer: It has embraced more racially and physically diverse idols, reflecting a broader cultural shift and South Korea's soft power political strategy"
  },
  {
    "id": "world-q107",
    "text": "What platform is credited with catapulting K-Pop into international stardom alongside social media?",
    "options": [
      "YouTube",
      "Netflix",
      "Spotify",
      "TikTok"
    ],
    "answer": 0,
    "explanation": "Correct answer: YouTube"
  },
  {
    "id": "world-q108",
    "text": "What is the globalization of religion?",
    "options": [
      "The processes through which religious beliefs, practices, and institutions spread across the globe influenced by historical, cultural, and technological factors",
      "The merger of all world religions into one",
      "A government program to promote a single global religion",
      "The decline of religion due to scientific progress"
    ],
    "answer": 0,
    "explanation": "Correct answer: The processes through which religious beliefs, practices, and institutions spread across the globe influenced by historical, cultural, and technological factors"
  },
  {
    "id": "world-q109",
    "text": "To what historical period can the globalization of religion be traced?",
    "options": [
      "The colonial expansions of European powers from the 14th century onward",
      "The Industrial Revolution of the 18th century",
      "The formation of the United Nations in 1945",
      "The Cold War of the 20th century"
    ],
    "answer": 0,
    "explanation": "Correct answer: The colonial expansions of European powers from the 14th century onward"
  },
  {
    "id": "world-q110",
    "text": "Who played a significant role in spreading Christianity during colonial expansion?",
    "options": [
      "Missionaries",
      "Merchants and traders",
      "Military generals",
      "Scientists and explorers"
    ],
    "answer": 0,
    "explanation": "Correct answer: Missionaries"
  },
  {
    "id": "world-q111",
    "text": "In modern times, what technology primarily facilitates the globalization of religion?",
    "options": [
      "The internet",
      "Television",
      "The printing press",
      "Satellite radio"
    ],
    "answer": 0,
    "explanation": "Correct answer: The internet"
  },
  {
    "id": "world-q112",
    "text": "What example is given of religious globalization in the Philippines?",
    "options": [
      "Traditional Catholic practices have blended with local customs",
      "Islam replaced traditional Filipino beliefs completely",
      "Buddhism became the dominant religion",
      "The Philippines rejected all foreign religions"
    ],
    "answer": 0,
    "explanation": "Correct answer: Traditional Catholic practices have blended with local customs"
  },
  {
    "id": "world-q113",
    "text": "What is the commoditization of religion?",
    "options": [
      "The transformation of religion in a global marketplace where spiritual goods and services are subject to market forces",
      "The conversion of temples into shopping centers",
      "The use of religion to justify economic inequality",
      "The complete commercialization of all cultural practices"
    ],
    "answer": 0,
    "explanation": "Correct answer: The transformation of religion in a global marketplace where spiritual goods and services are subject to market forces"
  },
  {
    "id": "world-q114",
    "text": "What is Samuel Huntington's 'Clash of Civilizations' thesis?",
    "options": [
      "Cultural and religious identities will shape global politics",
      "Economic systems will replace religious identities in politics",
      "Technology will eliminate all religious conflict",
      "Nations will unite under one global religion"
    ],
    "answer": 0,
    "explanation": "Correct answer: Cultural and religious identities will shape global politics"
  },
  {
    "id": "world-q115",
    "text": "What does evidence suggest happens rather than a simple clash of civilizations?",
    "options": [
      "A complex diffusion of religious practices across cultures, leading to syncretism and hybrid identities",
      "A complete victory of Western culture over Eastern culture",
      "The elimination of all minority religions",
      "The separation of all cultures into isolated groups"
    ],
    "answer": 0,
    "explanation": "Correct answer: A complex diffusion of religious practices across cultures, leading to syncretism and hybrid identities"
  },
  {
    "id": "world-q116",
    "text": "What is syncretism?",
    "options": [
      "The blending or merging of different religious or cultural beliefs and practices, resulting in new hybrid identities and expressions",
      "The strict separation of religious traditions from each other",
      "The rejection of all foreign religious ideas",
      "The conversion of all people to one religion"
    ],
    "answer": 0,
    "explanation": "Correct answer: The blending or merging of different religious or cultural beliefs and practices, resulting in new hybrid identities and expressions"
  },
  {
    "id": "world-q117",
    "text": "What is a monotheistic religion?",
    "options": [
      "A religion that believes in only one God",
      "A religion that worships nature",
      "A religion that has no central deity",
      "A religion that has many gods and goddesses"
    ],
    "answer": 0,
    "explanation": "Correct answer: A religion that believes in only one God"
  },
  {
    "id": "world-q118",
    "text": "Which three of the five major world religions are monotheistic?",
    "options": [
      "Christianity, Islam, and Judaism",
      "Christianity, Buddhism, and Hinduism",
      "Islam, Hinduism, and Buddhism",
      "Judaism, Hinduism, and Buddhism"
    ],
    "answer": 0,
    "explanation": "Correct answer: Christianity, Islam, and Judaism"
  },
  {
    "id": "world-q119",
    "text": "What is the approximate percentage of the world's population that identifies as Christian?",
    "options": [
      "31.5%",
      "23.2%",
      "15%",
      "7.1%"
    ],
    "answer": 0,
    "explanation": "Correct answer: 31.5%"
  },
  {
    "id": "world-q120",
    "text": "What is the approximate percentage of the world's population that identifies as Muslim?",
    "options": [
      "23.2%",
      "31.5%",
      "15%",
      "7.1%"
    ],
    "answer": 0,
    "explanation": "Correct answer: 23.2%"
  },
  {
    "id": "world-q121",
    "text": "What percentage of the world's population practices Hinduism?",
    "options": [
      "15%",
      "7.1%",
      "23.2%",
      "0.2%"
    ],
    "answer": 0,
    "explanation": "Correct answer: 15%"
  },
  {
    "id": "world-q122",
    "text": "What percentage of the world's population practices Buddhism?",
    "options": [
      "7.1%",
      "15%",
      "0.2%",
      "16.3%"
    ],
    "answer": 0,
    "explanation": "Correct answer: 7.1%"
  },
  {
    "id": "world-q123",
    "text": "What percentage of the world's population identifies as having no religious affiliation?",
    "options": [
      "16.3%",
      "7.1%",
      "0.2%",
      "6.7%"
    ],
    "answer": 0,
    "explanation": "Correct answer: 16.3%"
  },
  {
    "id": "world-q124",
    "text": "What percentage of the world's population is Jewish?",
    "options": [
      "0.2%",
      "7.1%",
      "1%",
      "6.7%"
    ],
    "answer": 0,
    "explanation": "Correct answer: 0.2%"
  },
  {
    "id": "world-q125",
    "text": "The commoditization of religion can lead to what outcomes?",
    "options": [
      "The emergence of new religious movements and adaptation of traditional practices to fit modern contexts",
      "The elimination of all traditional religious practices",
      "The unification of all religions into one global faith",
      "The total rejection of market forces by religious institutions"
    ],
    "answer": 0,
    "explanation": "Correct answer: The emergence of new religious movements and adaptation of traditional practices to fit modern contexts"
  },
  {
    "id": "world-q126",
    "text": "How does the lesson describe the globalization of religion in its conclusion?",
    "options": [
      "A multifaceted phenomenon encompassing historical, cultural, and economic dimensions reflecting the dynamic interplay between local traditions and global influences",
      "A simple and uniform process of one religion replacing others",
      "A purely economic phenomenon driven by trade",
      "An entirely negative process that destroys all local traditions"
    ],
    "answer": 0,
    "explanation": "Correct answer: A multifaceted phenomenon encompassing historical, cultural, and economic dimensions reflecting the dynamic interplay between local traditions and global influences"
  },
  {
    "id": "world-q127",
    "text": "What does religious globalization lead to in terms of communities?",
    "options": [
      "New forms of syncretism and hybrid identities as religious practices diffuse across cultures",
      "Strict separation of all religious communities",
      "The replacement of all local religions with Christianity",
      "The complete rejection of all foreign religious ideas"
    ],
    "answer": 0,
    "explanation": "Correct answer: New forms of syncretism and hybrid identities as religious practices diffuse across cultures"
  },
  {
    "id": "world-q128",
    "text": "What is described as the significance of the internet for the globalization of religion?",
    "options": [
      "It allows for the rapid dissemination of religious ideas and practices across the globe",
      "It has caused the decline of all traditional religions",
      "It allows governments to control religious information",
      "It has replaced physical places of worship entirely"
    ],
    "answer": 0,
    "explanation": "Correct answer: It allows for the rapid dissemination of religious ideas and practices across the globe"
  },
  {
    "id": "world-q129",
    "text": "What economic change has globalization brought to religious institutions?",
    "options": [
      "Religious institutions now navigate a global marketplace where spiritual goods and services are subject to market forces",
      "Religious institutions have become completely separate from the economy",
      "All religious activities are now funded by governments",
      "Religious institutions have become the dominant economic force globally"
    ],
    "answer": 0,
    "explanation": "Correct answer: Religious institutions now navigate a global marketplace where spiritual goods and services are subject to market forces"
  },
  {
    "id": "world-q130",
    "text": "The historical backdrop of colonial religious expansion laid the foundation for which religions' global presence today?",
    "options": [
      "Particularly Christianity and Islam",
      "Particularly Buddhism and Hinduism",
      "Particularly Judaism and Hinduism",
      "Particularly Buddhism and Judaism"
    ],
    "answer": 0,
    "explanation": "Correct answer: Particularly Christianity and Islam"
  },
  {
    "id": "world-q131",
    "text": "What is the largest religion in the world?",
    "options": [
      "Christianity",
      "Islam",
      "Hinduism",
      "Buddhism"
    ],
    "answer": 0,
    "explanation": "Correct answer: Christianity"
  },
  {
    "id": "world-q132",
    "text": "Approximately how many believers does Christianity have worldwide?",
    "options": [
      "More than 2 billion",
      "1.8 billion",
      "1 billion",
      "3 billion"
    ],
    "answer": 0,
    "explanation": "Correct answer: More than 2 billion"
  },
  {
    "id": "world-q133",
    "text": "Christianity is described as what type of religion?",
    "options": [
      "Monotheistic",
      "Polytheistic",
      "Pantheistic",
      "Atheistic"
    ],
    "answer": 0,
    "explanation": "Correct answer: Monotheistic"
  },
  {
    "id": "world-q134",
    "text": "What is the Holy Trinity in Christianity?",
    "options": [
      "The divinity of the Father (God), the Son (Jesus), and the Holy Spirit as one God",
      "Three separate gods of creation, war, and wisdom",
      "God, the Virgin Mary, and Jesus",
      "The Bible, the Church, and the Holy Cross"
    ],
    "answer": 0,
    "explanation": "Correct answer: The divinity of the Father (God), the Son (Jesus), and the Holy Spirit as one God"
  },
  {
    "id": "world-q135",
    "text": "What is the central belief in Christianity regarding Jesus?",
    "options": [
      "He is the Son of God, sent to earth as a man and messiah to save people from their sins",
      "He was a great philosopher but not divine",
      "He was the first prophet who spoke to God",
      "He was an angel sent to judge humanity"
    ],
    "answer": 0,
    "explanation": "Correct answer: He is the Son of God, sent to earth as a man and messiah to save people from their sins"
  },
  {
    "id": "world-q136",
    "text": "What does Christianity teach about Jesus after his crucifixion?",
    "options": [
      "He rose from the dead after three days and ascended to heaven",
      "He reincarnated as a new spiritual leader",
      "He remained on earth to guide his followers",
      "He went to a separate realm to prepare for the afterlife"
    ],
    "answer": 0,
    "explanation": "Correct answer: He rose from the dead after three days and ascended to heaven"
  },
  {
    "id": "world-q137",
    "text": "What do Christians believe about a 'second coming'?",
    "options": [
      "Jesus will return to Earth and take Christian believers back to heaven with him",
      "Jesus will be reborn as a new human being",
      "A new messiah will be born to replace Jesus",
      "The world will be destroyed and rebuilt"
    ],
    "answer": 0,
    "explanation": "Correct answer: Jesus will return to Earth and take Christian believers back to heaven with him"
  },
  {
    "id": "world-q138",
    "text": "What are the sacred texts of Christianity?",
    "options": [
      "The Old Testament and the New Testament, together forming the Holy Bible",
      "The Torah and the Talmud",
      "The Quran and the Hadith",
      "The Vedas and the Upanishads"
    ],
    "answer": 0,
    "explanation": "Correct answer: The Old Testament and the New Testament, together forming the Holy Bible"
  },
  {
    "id": "world-q139",
    "text": "Which commandments play an important role in Christian teachings?",
    "options": [
      "The Ten Commandments",
      "The Five Pillars",
      "The Eight Precepts",
      "The Four Noble Truths"
    ],
    "answer": 0,
    "explanation": "Correct answer: The Ten Commandments"
  },
  {
    "id": "world-q140",
    "text": "What is the second largest religion in the world?",
    "options": [
      "Islam",
      "Hinduism",
      "Buddhism",
      "Judaism"
    ],
    "answer": 0,
    "explanation": "Correct answer: Islam"
  },
  {
    "id": "world-q141",
    "text": "Approximately how many followers does Islam have?",
    "options": [
      "1.8 billion",
      "2 billion",
      "1 billion",
      "500 million"
    ],
    "answer": 0,
    "explanation": "Correct answer: 1.8 billion"
  },
  {
    "id": "world-q142",
    "text": "In what century did Islam begin and in which region?",
    "options": [
      "7th century B.C. in what is now Saudi Arabia",
      "5th century B.C. in India",
      "3rd century A.D. in Egypt",
      "1st century A.D. in Rome"
    ],
    "answer": 0,
    "explanation": "Correct answer: 7th century B.C. in what is now Saudi Arabia"
  },
  {
    "id": "world-q143",
    "text": "What term refers to followers of Islam?",
    "options": [
      "Muslims",
      "Islamists",
      "Mohammedans",
      "Believers"
    ],
    "answer": 0,
    "explanation": "Correct answer: Muslims"
  },
  {
    "id": "world-q144",
    "text": "What do Muslims worship?",
    "options": [
      "Allah as the one true God",
      "Muhammad as the supreme deity",
      "Multiple deities representing nature",
      "The sun and the moon"
    ],
    "answer": 0,
    "explanation": "Correct answer: Allah as the one true God"
  },
  {
    "id": "world-q145",
    "text": "Who is Muhammad in Islam?",
    "options": [
      "Allah's final messenger, who received and shared messages from Allah",
      "The creator of the universe",
      "The first human being",
      "The king of all prophets above God"
    ],
    "answer": 0,
    "explanation": "Correct answer: Allah's final messenger, who received and shared messages from Allah"
  },
  {
    "id": "world-q146",
    "text": "What is a mosque?",
    "options": [
      "An Islamic place of worship",
      "A Jewish place of worship",
      "A Hindu temple",
      "A Buddhist meditation center"
    ],
    "answer": 0,
    "explanation": "Correct answer: An Islamic place of worship"
  },
  {
    "id": "world-q147",
    "text": "What is the caliphate?",
    "options": [
      "The system of leadership that arose after Muhammad's death, with individual leaders called caliphs",
      "A type of Islamic prayer ritual",
      "A holy text of Islam",
      "A Muslim pilgrimage"
    ],
    "answer": 0,
    "explanation": "Correct answer: The system of leadership that arose after Muhammad's death, with individual leaders called caliphs"
  },
  {
    "id": "world-q148",
    "text": "What are the two major sects of Islam?",
    "options": [
      "Sunni and Shia (Shiite)",
      "Orthodox and Reform",
      "Theravada and Mahayana",
      "Catholic and Protestant"
    ],
    "answer": 0,
    "explanation": "Correct answer: Sunni and Shia (Shiite)"
  },
  {
    "id": "world-q149",
    "text": "What percentage of Muslims are Sunni?",
    "options": [
      "90%",
      "50%",
      "70%",
      "80%"
    ],
    "answer": 0,
    "explanation": "Correct answer: 90%"
  },
  {
    "id": "world-q150",
    "text": "What is Ramadan?",
    "options": [
      "The holy month during which followers of Islam are required to fast",
      "The Islamic new year celebration",
      "The month of daily pilgrimage",
      "A month of charity and gift-giving"
    ],
    "answer": 0,
    "explanation": "Correct answer: The holy month during which followers of Islam are required to fast"
  },
  {
    "id": "world-q151",
    "text": "What is Hajj?",
    "options": [
      "The pilgrimage to the holy city of Mecca that Muslims are expected to complete at least once in their lives",
      "A daily prayer ritual",
      "The Islamic fasting period",
      "A charitable donation requirement"
    ],
    "answer": 0,
    "explanation": "Correct answer: The pilgrimage to the holy city of Mecca that Muslims are expected to complete at least once in their lives"
  },
  {
    "id": "world-q152",
    "text": "How many times per day do Muslims pray?",
    "options": [
      "Five times",
      "Three times",
      "Once a day",
      "Twice a day"
    ],
    "answer": 0,
    "explanation": "Correct answer: Five times"
  },
  {
    "id": "world-q153",
    "text": "What is the holy book of Islam?",
    "options": [
      "The Quran",
      "The Bible",
      "The Talmud",
      "The Vedas"
    ],
    "answer": 0,
    "explanation": "Correct answer: The Quran"
  },
  {
    "id": "world-q154",
    "text": "In how many countries does more than 90% of the population identify as Muslim?",
    "options": [
      "Seven",
      "Three",
      "Five",
      "Ten"
    ],
    "answer": 0,
    "explanation": "Correct answer: Seven"
  },
  {
    "id": "world-q155",
    "text": "What denomination makes up the majority of Muslims globally?",
    "options": [
      "Sunni",
      "Shia",
      "Sufi",
      "Ahmadiyya"
    ],
    "answer": 0,
    "explanation": "Correct answer: Sunni"
  },
  {
    "id": "world-q156",
    "text": "In Islam, what does it mean to live in submission to the will of Allah?",
    "options": [
      "To commit to living life according to Islamic faith",
      "To follow only the Five Pillars with no other obligations",
      "To reject all non-Islamic cultural practices",
      "To live in a Muslim-majority country"
    ],
    "answer": 0,
    "explanation": "Correct answer: To commit to living life according to Islamic faith"
  },
  {
    "id": "world-q157",
    "text": "What is the hijab?",
    "options": [
      "A head covering worn by many Muslim women as part of their faith",
      "A type of Islamic prayer ritual",
      "A certificate of pilgrimage to Mecca",
      "A sign of marriage in Islamic tradition"
    ],
    "answer": 0,
    "explanation": "Correct answer: A head covering worn by many Muslim women as part of their faith"
  },
  {
    "id": "world-q158",
    "text": "What is Hinduism's rank among world religions by number of followers?",
    "options": [
      "Third largest",
      "Second largest",
      "Fourth largest",
      "Largest"
    ],
    "answer": 0,
    "explanation": "Correct answer: Third largest"
  },
  {
    "id": "world-q159",
    "text": "Where did Hinduism originate?",
    "options": [
      "India around 2300 B.C.",
      "China around 1500 B.C.",
      "Egypt around 3000 B.C.",
      "Saudi Arabia around 600 B.C."
    ],
    "answer": 0,
    "explanation": "Correct answer: India around 2300 B.C."
  },
  {
    "id": "world-q160",
    "text": "What percentage of Hindus live in India as of 2018?",
    "options": [
      "About 94%",
      "About 50%",
      "About 70%",
      "About 80%"
    ],
    "answer": 0,
    "explanation": "Correct answer: About 94%"
  },
  {
    "id": "world-q161",
    "text": "What does Hinduism teach about God's presence?",
    "options": [
      "God's presence exists in all of creation",
      "God is entirely separate from the physical world",
      "God only resides in sacred temples",
      "God only speaks to chosen prophets"
    ],
    "answer": 0,
    "explanation": "Correct answer: God's presence exists in all of creation"
  },
  {
    "id": "world-q162",
    "text": "Who is the recognized supreme deity in Hinduism?",
    "options": [
      "Brahman",
      "Shiva",
      "Vishnu",
      "Atman"
    ],
    "answer": 0,
    "explanation": "Correct answer: Brahman"
  },
  {
    "id": "world-q163",
    "text": "What are the other two primary Hindu deities besides Brahman?",
    "options": [
      "Shiva and Vishnu",
      "Krishna and Rama",
      "Ganesha and Lakshmi",
      "Indra and Varuna"
    ],
    "answer": 0,
    "explanation": "Correct answer: Shiva and Vishnu"
  },
  {
    "id": "world-q164",
    "text": "What is atman in Hinduism?",
    "options": [
      "The divine essence that dwells within each person",
      "The Hindu concept of heaven",
      "The supreme creator deity",
      "The cycle of death and rebirth"
    ],
    "answer": 0,
    "explanation": "Correct answer: The divine essence that dwells within each person"
  },
  {
    "id": "world-q165",
    "text": "What do Hindus believe about reincarnation?",
    "options": [
      "There is a constant cycle of being born, living, and dying on the path to enlightenment",
      "After death, people become stars in the sky",
      "Reincarnation only applies to sacred animals",
      "People are reincarnated as higher or lower beings based on caste"
    ],
    "answer": 0,
    "explanation": "Correct answer: There is a constant cycle of being born, living, and dying on the path to enlightenment"
  },
  {
    "id": "world-q166",
    "text": "What is karma in Hinduism?",
    "options": [
      "The net of a person's good and bad deeds in their last life that determines the level to which they will be reborn",
      "A type of Hindu prayer",
      "A Hindu festival of lights",
      "The Hindu concept of paradise"
    ],
    "answer": 0,
    "explanation": "Correct answer: The net of a person's good and bad deeds in their last life that determines the level to which they will be reborn"
  },
  {
    "id": "world-q167",
    "text": "Which of the following is NOT a sacred text of Hinduism?",
    "options": [
      "The Quran",
      "The Vedas",
      "The Bhagavad Gita",
      "The Upanishads"
    ],
    "answer": 0,
    "explanation": "Correct answer: The Quran"
  },
  {
    "id": "world-q168",
    "text": "What is an integral component of Hinduism mentioned in the lesson?",
    "options": [
      "Yoga practice",
      "Fasting for 40 days",
      "Pilgrimage to the Ganges River only",
      "Wearing specific colors on certain days"
    ],
    "answer": 0,
    "explanation": "Correct answer: Yoga practice"
  },
  {
    "id": "world-q169",
    "text": "What is the role of Brahman in Hinduism specifically?",
    "options": [
      "The supreme deity responsible for creating everything in the universe; has no gender and is all-knowing and all-present",
      "A demi-god responsible only for the physical world",
      "The Hindu equivalent of the Christian Holy Spirit",
      "A regional deity worshiped only in northern India"
    ],
    "answer": 0,
    "explanation": "Correct answer: The supreme deity responsible for creating everything in the universe; has no gender and is all-knowing and all-present"
  },
  {
    "id": "world-q170",
    "text": "Which sacred texts are mentioned for Hinduism?",
    "options": [
      "The Vedas, the Samhitas, the Upanishads, the Ramayana, and the Bhagavad Gita",
      "Only the Bhagavad Gita",
      "The Bible, the Quran, and the Vedas",
      "The Torah, the Talmud, and the Vedas"
    ],
    "answer": 0,
    "explanation": "Correct answer: The Vedas, the Samhitas, the Upanishads, the Ramayana, and the Bhagavad Gita"
  },
  {
    "id": "world-q171",
    "text": "How many sects of Hinduism are mentioned?",
    "options": [
      "Multiple sects with significant variations in practices",
      "Exactly two: Shaivism and Vaishnavism",
      "Exactly three: Brahman, Shiva, and Vishnu",
      "Only one unified form of Hinduism"
    ],
    "answer": 0,
    "explanation": "Correct answer: Multiple sects with significant variations in practices"
  },
  {
    "id": "world-q172",
    "text": "Who founded Buddhism?",
    "options": [
      "Siddhartha Gautama",
      "Confucius",
      "Laozi",
      "The Dalai Lama"
    ],
    "answer": 0,
    "explanation": "Correct answer: Siddhartha Gautama"
  },
  {
    "id": "world-q173",
    "text": "In what century was Buddhism founded?",
    "options": [
      "5th century B.C.",
      "3rd century B.C.",
      "2nd century A.D.",
      "7th century B.C."
    ],
    "answer": 0,
    "explanation": "Correct answer: 5th century B.C."
  },
  {
    "id": "world-q174",
    "text": "How did Siddhartha Gautama discover enlightenment?",
    "options": [
      "By giving up his wealth and position to live a simple life as a monk",
      "By conquering neighboring kingdoms",
      "By studying under multiple gods",
      "By performing miraculous healings"
    ],
    "answer": 0,
    "explanation": "Correct answer: By giving up his wealth and position to live a simple life as a monk"
  },
  {
    "id": "world-q175",
    "text": "What is the primary focus of Buddhism?",
    "options": [
      "To seek enlightenment",
      "To worship the Buddha as a god",
      "To convert as many people as possible",
      "To achieve wealth and social status"
    ],
    "answer": 0,
    "explanation": "Correct answer: To seek enlightenment"
  },
  {
    "id": "world-q176",
    "text": "How is the Buddha regarded in Buddhism?",
    "options": [
      "As a man who achieved enlightenment — not worshiped as a god",
      "As a deity equal to God",
      "As the creator of the universe",
      "As a prophet sent by God"
    ],
    "answer": 0,
    "explanation": "Correct answer: As a man who achieved enlightenment — not worshiped as a god"
  },
  {
    "id": "world-q177",
    "text": "Which of the following is one of Buddhism's five precepts?",
    "options": [
      "Refrain from killing",
      "Pray five times daily",
      "Fast during a holy month",
      "Participate in an annual pilgrimage"
    ],
    "answer": 0,
    "explanation": "Correct answer: Refrain from killing"
  },
  {
    "id": "world-q178",
    "text": "Which of Buddhism's five precepts relates to honesty?",
    "options": [
      "Refraining from lying",
      "Refraining from killing",
      "Refraining from stealing",
      "Refraining from misusing sex"
    ],
    "answer": 0,
    "explanation": "Correct answer: Refraining from lying"
  },
  {
    "id": "world-q179",
    "text": "Buddhism's five precepts include refraining from which of the following?",
    "options": [
      "Using drugs or alcohol",
      "Eating meat",
      "Wearing bright colors",
      "Owning property"
    ],
    "answer": 0,
    "explanation": "Correct answer: Using drugs or alcohol"
  },
  {
    "id": "world-q180",
    "text": "What is the role of karma in Buddhism?",
    "options": [
      "Focusing on everyone's responsibility and accountability for their own actions",
      "Determining which god a person will worship",
      "Deciding which caste a person belongs to",
      "Predicting a person's future wealth"
    ],
    "answer": 0,
    "explanation": "Correct answer: Focusing on everyone's responsibility and accountability for their own actions"
  },
  {
    "id": "world-q181",
    "text": "Where do the vast majority of Buddhists live?",
    "options": [
      "Eastern and southeastern regions of Asia",
      "South Asia and the Middle East",
      "Western Europe and North America",
      "Central Asia and Africa"
    ],
    "answer": 0,
    "explanation": "Correct answer: Eastern and southeastern regions of Asia"
  },
  {
    "id": "world-q182",
    "text": "What does Buddhism teach about reincarnation vs. rebirth?",
    "options": [
      "Reincarnation means coming back as yourself multiple times; rebirth involves returning as an entirely different entity",
      "Both terms mean exactly the same thing in Buddhism",
      "Reincarnation is rejected but rebirth is accepted",
      "Neither reincarnation nor rebirth is part of Buddhism"
    ],
    "answer": 0,
    "explanation": "Correct answer: Reincarnation means coming back as yourself multiple times; rebirth involves returning as an entirely different entity"
  },
  {
    "id": "world-q183",
    "text": "Is theism fundamental to Buddhism?",
    "options": [
      "No — theism is not fundamental to Buddhism, though it is part of some Buddhist traditions",
      "Yes — all Buddhists must worship a deity",
      "Yes — Buddhists worship the Buddha as a god",
      "No — Buddhism completely forbids belief in any deity"
    ],
    "answer": 0,
    "explanation": "Correct answer: No — theism is not fundamental to Buddhism, though it is part of some Buddhist traditions"
  },
  {
    "id": "world-q184",
    "text": "What is the foundation of Buddhism based on?",
    "options": [
      "A set of three universal truths and four noble principles",
      "The Five Pillars and the Ten Commandments",
      "A single divine revelation received by the Buddha",
      "The teachings of multiple gods passed down through priests"
    ],
    "answer": 0,
    "explanation": "Correct answer: A set of three universal truths and four noble principles"
  },
  {
    "id": "world-q185",
    "text": "What aspect of Buddhism is consistent with philosophy's principles and truths?",
    "options": [
      "Following a path of moral living, thinking, and behavior, as well as seeking wisdom",
      "Worshiping the Buddha as the supreme God",
      "Following strict dietary laws prescribed by the Buddha",
      "Performing elaborate ceremonial rituals daily"
    ],
    "answer": 0,
    "explanation": "Correct answer: Following a path of moral living, thinking, and behavior, as well as seeking wisdom"
  },
  {
    "id": "world-q186",
    "text": "Judaism is the smallest of the top five religions with approximately how many followers worldwide?",
    "options": [
      "14 million",
      "140 million",
      "1.4 billion",
      "28 million"
    ],
    "answer": 0,
    "explanation": "Correct answer: 14 million"
  },
  {
    "id": "world-q187",
    "text": "What percentage of the Jewish population lives in Israel?",
    "options": [
      "About 41%",
      "About 70%",
      "About 20%",
      "About 10%"
    ],
    "answer": 0,
    "explanation": "Correct answer: About 41%"
  },
  {
    "id": "world-q188",
    "text": "What percentage of the Jewish population lives in the United States?",
    "options": [
      "About 41%",
      "About 60%",
      "About 20%",
      "About 10%"
    ],
    "answer": 0,
    "explanation": "Correct answer: About 41%"
  },
  {
    "id": "world-q189",
    "text": "What is the primary holy text of the Jewish faith?",
    "options": [
      "The Hebrew Bible (Tanakh)",
      "The Talmud",
      "The Torah only",
      "The Quran"
    ],
    "answer": 0,
    "explanation": "Correct answer: The Hebrew Bible (Tanakh)"
  },
  {
    "id": "world-q190",
    "text": "What are the first five books of the Hebrew Bible called?",
    "options": [
      "The Torah",
      "The Talmud",
      "The Psalms",
      "The Mishnah"
    ],
    "answer": 0,
    "explanation": "Correct answer: The Torah"
  },
  {
    "id": "world-q191",
    "text": "What is the Talmud?",
    "options": [
      "A holy text in Judaism containing an extensive collection of Jewish laws and various teachings specific to the faith",
      "The first five books of the Hebrew Bible",
      "The Jewish equivalent of the New Testament",
      "A commentary on the Quran"
    ],
    "answer": 0,
    "explanation": "Correct answer: A holy text in Judaism containing an extensive collection of Jewish laws and various teachings specific to the faith"
  },
  {
    "id": "world-q192",
    "text": "What is a synagogue?",
    "options": [
      "A Jewish house of worship",
      "An Islamic place of worship",
      "A Hindu temple",
      "A Buddhist monastery"
    ],
    "answer": 0,
    "explanation": "Correct answer: A Jewish house of worship"
  },
  {
    "id": "world-q193",
    "text": "What is a Bar Mitzvah?",
    "options": [
      "A ceremony in the Jewish faith for boys symbolizing they have reached adulthood in terms of their responsibilities to the faith",
      "A Jewish holiday celebrating the new year",
      "A Jewish wedding ceremony",
      "A Jewish funeral rite"
    ],
    "answer": 0,
    "explanation": "Correct answer: A ceremony in the Jewish faith for boys symbolizing they have reached adulthood in terms of their responsibilities to the faith"
  },
  {
    "id": "world-q194",
    "text": "What is a Bat Mitzvah?",
    "options": [
      "A ceremony in the Jewish faith for girls symbolizing they have reached adulthood in terms of their responsibilities to the faith",
      "A coming-of-age ceremony for Muslim girls",
      "A Hindu ritual for young women",
      "A Christian confirmation ceremony"
    ],
    "answer": 0,
    "explanation": "Correct answer: A ceremony in the Jewish faith for girls symbolizing they have reached adulthood in terms of their responsibilities to the faith"
  },
  {
    "id": "world-q195",
    "text": "What is Judaism described as in terms of the history of monotheism?",
    "options": [
      "The oldest monotheistic religion",
      "The newest monotheistic religion",
      "A polytheistic religion",
      "A pantheistic religion"
    ],
    "answer": 0,
    "explanation": "Correct answer: The oldest monotheistic religion"
  },
  {
    "id": "world-q196",
    "text": "The Ten Commandments are central to which two religions?",
    "options": [
      "Christianity and Judaism",
      "Christianity and Islam",
      "Islam and Judaism",
      "Buddhism and Hinduism"
    ],
    "answer": 0,
    "explanation": "Correct answer: Christianity and Judaism"
  },
  {
    "id": "world-q197",
    "text": "What does righteousness and justice represent in Judaism?",
    "options": [
      "Central teachings of the faith, even beyond God's law in the Ten Commandments",
      "Optional personal values",
      "Secondary concerns after ritual observance",
      "Concepts only important in modern Judaism"
    ],
    "answer": 0,
    "explanation": "Correct answer: Central teachings of the faith, even beyond God's law in the Ten Commandments"
  },
  {
    "id": "world-q198",
    "text": "Why is Israel important to the Jewish people?",
    "options": [
      "Both for its historical significance to their faith and its designation as the promised land in the Bible",
      "Only because it is the most modern democratic country",
      "Because it is the location of all Jewish holy texts",
      "Because it is the birthplace of Muhammad"
    ],
    "answer": 0,
    "explanation": "Correct answer: Both for its historical significance to their faith and its designation as the promised land in the Bible"
  },
  {
    "id": "world-q199",
    "text": "What does the Tanakh contain?",
    "options": [
      "The same books as the Old Testament of the Christian Bible, though in a different order",
      "The same books as the New Testament",
      "Books unique to Judaism with no overlap with the Christian Bible",
      "Only the Torah and the Psalms"
    ],
    "answer": 0,
    "explanation": "Correct answer: The same books as the Old Testament of the Christian Bible, though in a different order"
  },
  {
    "id": "world-q200",
    "text": "What is the difference between the Tanakh and the Torah?",
    "options": [
      "The Tanakh is the complete Hebrew Bible while the Torah refers specifically to its first five books",
      "The Torah is more sacred than the Tanakh",
      "The Tanakh is only used by Orthodox Jews",
      "They are completely different texts with no overlap"
    ],
    "answer": 0,
    "explanation": "Correct answer: The Tanakh is the complete Hebrew Bible while the Torah refers specifically to its first five books"
  }
]
  },
  sts: {
    id: 'sts',
    title: 'Science, Technology & Society',
    description: 'Examine the connections between scientific knowledge, technological innovations, and society.',
    icon: '🧬',
    tags: ['Science', 'Technology', 'Society'],
    questions: [
  {
    "id": "sts-q1",
    "text": "The word \"Science\" comes from the Latin word _____, which means knowledge.",
    "options": [
      "Techne",
      "Scientia",
      "Socius",
      "Logos"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q2",
    "text": "Technology comes from the Greek words \"techne\" and \"logos.\" What does \"techne\" mean?",
    "options": [
      "Knowledge",
      "Society",
      "Art, skills, or crafts",
      "Word or thought"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q3",
    "text": "Which of the following BEST defines Society?",
    "options": [
      "The application of scientific knowledge to practical aims",
      "A larger group of individuals associated with each other",
      "A pursuit of knowledge covering fundamental laws",
      "The study of how values affect scientific research"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q4",
    "text": "STS stands for:",
    "options": [
      "Science, Technology, and Statistics",
      "Society, Technology, and Systems",
      "Science, Technology, and Society",
      "Systems, Theory, and Science"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q5",
    "text": "Which characteristic of science states that conclusions must be based on observable, measurable data?",
    "options": [
      "Focuses on the natural world",
      "Passes through the scientific community",
      "Goes through experiments",
      "Relies on evidence"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q6",
    "text": "[TRUE or FALSE] The STS cycle shows that science, technology, and society operate independently of one another.",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q7",
    "text": "Which of the following BEST describes the role of technology in the STS cycle?",
    "options": [
      "Technology demands more from society",
      "Technology makes life easier and benefits society",
      "Technology informs scientific research",
      "Technology replaces the need for science"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q8",
    "text": "[TRUE or FALSE] According to STS, social and cultural values can affect scientific research and technological innovation.",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q9",
    "text": "The word \"Society\" is derived from the Latin word \"socius,\" which means:",
    "options": [
      "Knowledge",
      "Progress",
      "Association or companionship",
      "Craftsmanship"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q10",
    "text": "Which of the following is NOT one of the four common characteristics of science?",
    "options": [
      "Focuses on the natural world",
      "Relies on authority figures",
      "Relies on evidence",
      "Goes through experiments"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q11",
    "text": "The Printing Press was invented by:",
    "options": [
      "Galileo Galilei",
      "Johannes Gutenberg",
      "Nicolaus Copernicus",
      "James Watt"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q12",
    "text": "Which ancient civilization invented the wheel, glass, and maps?",
    "options": [
      "Egypt",
      "Sumerians",
      "Mesopotamia",
      "Greece"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q13",
    "text": "The Medieval Period is also known as the _____ because of the few written records from that era.",
    "options": [
      "Golden Age",
      "Dark Ages",
      "Age of Reason",
      "Renaissance"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q14",
    "text": "[TRUE or FALSE] The Renaissance Period is described as a period of rebirth or revival.",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q15",
    "text": "Who improved the steam engine during the Industrial Period?",
    "options": [
      "Robert Fulton",
      "George Stephenson",
      "James Watt",
      "Thomas Edison"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q16",
    "text": "Alexander Graham Bell invented the:",
    "options": [
      "Lightbulb",
      "Telephone",
      "Steam engine",
      "Telegraph"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q17",
    "text": "Thomas Edison invented the lightbulb in what year?",
    "options": [
      "1865",
      "1876",
      "1879",
      "1885"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q18",
    "text": "Who formulated the Periodic Table of Elements?",
    "options": [
      "John Dalton",
      "Joseph Thomson",
      "Henri Becquerel",
      "Dmitri Mendeleev"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q19",
    "text": "[TRUE or FALSE] Marie and Pierre Curie discovered the electron in 1897.",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q20",
    "text": "Michael Faraday is known for:",
    "options": [
      "Discovering radioactivity",
      "Inventing the telescope",
      "Showing that a magnet can produce electricity and inventing the dynamo",
      "Formulating the Atomic Theory"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q21",
    "text": "Who discovered that electric current in a wire caused a nearby compass needle to move?",
    "options": [
      "Michael Faraday",
      "Hans Christian Oersted",
      "Samuel Morse",
      "James Clerk Maxwell"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q22",
    "text": "The Internet was originally developed under what name?",
    "options": [
      "WorldWideWeb",
      "ARPANET",
      "DARPA",
      "NetLink"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q23",
    "text": "[TRUE or FALSE] Henry Ford is known for the mass production of cars in the 20th century.",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q24",
    "text": "Karl Benz and Gottlieb Daimler made the first cars in:",
    "options": [
      "1876 and 1879",
      "1885 and 1886",
      "1890 and 1892",
      "1900 and 1901"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q25",
    "text": "Which ancient Asian country is credited with inventing the plow, lunar calendar, acupuncture, and recording sightings of comets?",
    "options": [
      "Japan",
      "India",
      "China",
      "Thailand"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q26",
    "text": "What is the name of the refined plank-built warship built by pre-colonial Filipinos for inter-island trade?",
    "options": [
      "Balangay",
      "Caracoa",
      "Paraw",
      "Bangka"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q27",
    "text": "The University of Santo Tomas was established during which period of Philippine history?",
    "options": [
      "Pre-Spanish Period",
      "Spanish Period",
      "Post-Colonial Period",
      "Marcos Period"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q28",
    "text": "[TRUE or FALSE] The Bureau of Government Laboratories was later replaced by the Bureau of Science, which then became the Institute of Science.",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q29",
    "text": "The Science Act of 1958 was passed with the goal of establishing the:",
    "options": [
      "Department of Science and Technology",
      "National Research Council of the Philippines",
      "National Science Development Board",
      "Philippine Science High School System"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q30",
    "text": "Fe Del Mundo invented the bamboo incubator in what year?",
    "options": [
      "1935",
      "1941",
      "1955",
      "1963"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q31",
    "text": "Gregorio Y. Zara is best remembered for:",
    "options": [
      "Inventing the karaoke machine",
      "Discovering erythromycin",
      "Inventing the first two-way video telephone in 1955",
      "Developing the single-chip GUI accelerator"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q32",
    "text": "[TRUE or FALSE] The karaoke machine patent is held by Daisuke Inoue, the Japanese inventor who built the first machine in 1971.",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q33",
    "text": "Diosdado \"Dado\" Banatao invented the single-chip graphical user interface accelerator in:",
    "options": [
      "1965",
      "1972",
      "1980",
      "1988"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q34",
    "text": "Which Filipino inventor developed the Karaoke Sing-Along System in 1975?",
    "options": [
      "Narciso Mosuela",
      "Marc Loinaz",
      "Roberto del Rosario",
      "Gregorio Zara"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q35",
    "text": "Dr. Abelardo Aguilar is credited with isolating a strain of bacteria that led to the development of:",
    "options": [
      "Penicillin",
      "Aspirin",
      "Erythromycin",
      "Amoxicillin"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q36",
    "text": "De La Salle University's solar-powered car SINAG placed _____ out of 40 competitors at the 2007 World Solar Challenge in Australia.",
    "options": [
      "1st",
      "5th",
      "12th",
      "20th"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q37",
    "text": "[TRUE or FALSE] The Super Kalan, invented by Narciso Mosuela, can only be powered by gasoline.",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q38",
    "text": "Marc Loinaz invented the:",
    "options": [
      "Bamboo incubator",
      "One-chip video camera",
      "Single-chip GUI accelerator",
      "Videophone"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q39",
    "text": "During the Marcos Period, which government body was established to monitor weather and related phenomena?",
    "options": [
      "DOST",
      "NEDA",
      "PAGASA",
      "NBSB"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q40",
    "text": "Pres. Corazon Aquino replaced the National Science & Technology Authority with the:",
    "options": [
      "National Research Council of the Philippines",
      "Department of Science and Technology (DOST)",
      "Philippine Science High School System",
      "Bureau of Science"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q41",
    "text": "The term \"Paradigm Shift\" was coined by:",
    "options": [
      "Charles Darwin",
      "Sigmund Freud",
      "Thomas Kuhn",
      "Nicolaus Copernicus"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q42",
    "text": "Thomas Kuhn introduced the concept of paradigm shift in his 1962 book titled:",
    "options": [
      "On the Origin of Species",
      "The Structure of Scientific Revolutions",
      "De Revolutionibus Orbium Coelestium",
      "The Interpretation of Dreams"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q43",
    "text": "[TRUE or FALSE] The Geocentric Model holds that the Sun is at the center of the universe.",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q44",
    "text": "Who developed the Ptolemaic System to explain planetary motion?",
    "options": [
      "Aristotle",
      "Pythagoras",
      "Claudius Ptolemy",
      "Aristarchus"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q45",
    "text": "Eratosthenes estimated the circumference of the Earth at approximately:",
    "options": [
      "20,000 km",
      "30,000 km",
      "40,000 km",
      "50,000 km"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q46",
    "text": "Who was the first to attempt a heliocentric model of the universe?",
    "options": [
      "Galileo Galilei",
      "Johannes Kepler",
      "Nicolaus Copernicus",
      "Aristarchus of Samos"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q47",
    "text": "Copernicus's major work, \"De Revolutionibus Orbium Coelestium,\" was published in:",
    "options": [
      "1506",
      "1530",
      "1543",
      "1564"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q48",
    "text": "[TRUE or FALSE] Johannes Kepler discovered that planetary orbits are elliptical, not circular.",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q49",
    "text": "What instrument did Galileo Galilei use to support the Copernican hypothesis?",
    "options": [
      "Microscope",
      "Telescope",
      "Barometer",
      "Thermometer"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q50",
    "text": "The Age of Enlightenment occurred during which century?",
    "options": [
      "16th century",
      "17th century",
      "18th century",
      "19th century"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q51",
    "text": "Jean-Baptiste Lamarck's Theory of Use and Disuse states that:",
    "options": [
      "Only the fittest organisms survive",
      "Variations are inherited from parents",
      "Body parts used more grow stronger; those unused deteriorate",
      "Species were created separately and distinctly"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q52",
    "text": "[TRUE or FALSE] According to Lamarck, acquired characteristics are inherited by offspring.",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q53",
    "text": "Charles Darwin joined the HMS Beagle expedition in what year?",
    "options": [
      "1825",
      "1831",
      "1840",
      "1859"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q54",
    "text": "Darwin's \"On the Origin of Species\" introduced the concept of:",
    "options": [
      "Psychoanalysis",
      "Natural Selection",
      "Paradigm Shift",
      "Use and Disuse"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q55",
    "text": "Which of the four principles of Darwinism states that overpopulation leads to competition, and organisms with survival traits persist?",
    "options": [
      "Variations",
      "Inheritance",
      "Selective Pressure",
      "Survival of the Fittest"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q56",
    "text": "[TRUE or FALSE] Darwin observed species variation among finches on the Galapagos Islands.",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q57",
    "text": "Sigmund Freud is known as the Father of:",
    "options": [
      "Evolution",
      "Psychoanalysis",
      "Behaviorism",
      "Cognitive Psychology"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q58",
    "text": "According to Freud's Topographical View, which region of the mind contains thoughts and feelings we are currently aware of?",
    "options": [
      "Preconscious Mind",
      "Unconscious Mind",
      "Conscious Mind",
      "Subconscious Mind"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q59",
    "text": "Which part of Freud's structural model operates on the Pleasure Principle?",
    "options": [
      "Ego",
      "Superego",
      "Id",
      "Preconscious"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q60",
    "text": "[TRUE or FALSE] The Ego operates on the Morality Principle in Freud's structural model.",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q61",
    "text": "The Superego in Freud's model:",
    "options": [
      "Seeks to increase pleasure and decrease pain",
      "Mediates between the id and external reality",
      "Operates as a moral conscience shaped by parental influence",
      "Contains unconscious aggressive and sexual drives"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q62",
    "text": "In the context of STS, which part of Freud's model represents ethics and social norms that restrain and guide the use of technology?",
    "options": [
      "Id",
      "Ego",
      "Superego",
      "Preconscious"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q63",
    "text": "[TRUE or FALSE] Lamarck believed that variation is inherited from birth, while Darwin believed variation is acquired during an organism's lifetime.",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q64",
    "text": "The Preconscious Mind, according to Freud, contains:",
    "options": [
      "Basic instincts and drives outside awareness",
      "Unrepressed memories that can be retrieved for specific purposes",
      "All thoughts currently in awareness",
      "Hidden desires and unacceptable ideas"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q65",
    "text": "Which revolution focused on explaining the origins of life and the diversity of species?",
    "options": [
      "Copernican Revolution",
      "Freudian Revolution",
      "Darwinian Revolution",
      "Industrial Revolution"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q66",
    "text": "Which article of the 1987 Philippine Constitution discusses the role of science and technology in national development?",
    "options": [
      "Article XII",
      "Article XIII",
      "Article XIV",
      "Article XV"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q67",
    "text": "[TRUE or FALSE] Section 10 of Article XIV states that science and technology are essential for national development and progress.",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q68",
    "text": "According to Article XIV Section 11, the Congress may provide _____ to encourage private participation in scientific research.",
    "options": [
      "Mandatory funding",
      "Tax deductions and incentives",
      "Government supervision",
      "Military support"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q69",
    "text": "Section 13 of Article XIV protects the _____ of scientists, inventors, artists, and gifted citizens.",
    "options": [
      "Physical safety",
      "Employment rights",
      "Intellectual property and creations",
      "Financial assets"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q70",
    "text": "The Philippine Development Plan (PDP) is launched by which government agency?",
    "options": [
      "DOST",
      "CHED",
      "NEDA",
      "DBM"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q71",
    "text": "Ambisyon Natin 2040 is built on three main pillars. Which of the following is NOT one of them?",
    "options": [
      "Malasakit",
      "Pagbabago",
      "Kaunlaran",
      "Kalayaan"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q72",
    "text": "[TRUE or FALSE] \"Malasakit\" under Ambisyon Natin 2040 refers to regaining people's trust in public institutions and cultivating trust among fellow Filipinos.",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q73",
    "text": "The NIBRA framework covers four sectors. Which of the following is NOT one of them?",
    "options": [
      "Health",
      "Industry, Energy and Emerging Technology",
      "Military Research and Defense",
      "Disaster Risk Reduction and Climate Change Adaptation"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q74",
    "text": "The SAPAT Program under NIBRA focuses on:",
    "options": [
      "Water Security",
      "Clean Energy",
      "Food and Nutrition Security",
      "Sustainable Community"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q75",
    "text": "[TRUE or FALSE] The ALERT Program stands for Alternative Energy Research Treads and focuses on clean energy.",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q76",
    "text": "The ATIN Program under NIBRA focuses on:",
    "options": [
      "Health Sufficiency",
      "Inclusive Nation-building",
      "Water Security",
      "Sustainable Community"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q77",
    "text": "The SAKLAW Program focuses on:",
    "options": [
      "Food security",
      "Sustainable community",
      "Clean energy",
      "Water access"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q78",
    "text": "Which of the following BEST describes the aim of \"Understanding Science\"?",
    "options": [
      "Helping teachers apply pedagogical models",
      "Developing science-process skills and using science literacy in everyday life",
      "Encouraging students to memorize scientific facts",
      "Preparing students for science competitions"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q79",
    "text": "[TRUE or FALSE] Science education in basic education focuses primarily on preparing science teachers and engineers.",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q80",
    "text": "The conceptual framework of Science Education in the Philippines aims to develop members of society who are scientifically, technologically, and _____ literate.",
    "options": [
      "Politically",
      "Economically",
      "Environmentally",
      "Culturally"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q81",
    "text": "The Philippine Science High School (PSHS) System provides scholarships to students with high aptitude in:",
    "options": [
      "Literature and History",
      "Science and Mathematics",
      "Engineering and Architecture",
      "Business and Economics"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q82",
    "text": "Which S&T program includes the initiatives NICER, RDLead, and CRADLE?",
    "options": [
      "Balik Scientist Program",
      "STARBOOKS",
      "Science for Change Program (S4CP)",
      "Tuklas Lunas Program"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q83",
    "text": "[TRUE or FALSE] STARBOOKS is a digital library that provides access to S&T information and is deployed especially in remote areas.",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q84",
    "text": "The Tuklas Lunas Program focuses on:",
    "options": [
      "Sending Filipino scientists abroad",
      "Discovering and developing new drugs from natural resources",
      "Building science high schools in the regions",
      "Providing digital books to communities"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q85",
    "text": "The Special Science Elementary Schools (SSES) Project is governed by which DepEd Orders?",
    "options": [
      "DepEd Order No. 60 s. 2005 and No. 40 s. 2008",
      "DepEd Order No. 73 s. 2008 and No. 51 s. 2010",
      "DepEd Order No. 10 s. 2012 and No. 22 s. 2015",
      "DepEd Order No. 55 s. 2006 and No. 30 s. 2009"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q86",
    "text": "As of 2025, how many individuals have been conferred the Order of National Scientist since its establishment in 1976?",
    "options": [
      "30",
      "38",
      "44",
      "50"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q87",
    "text": "[TRUE or FALSE] The Order of National Scientist is awarded by the Senate President.",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q88",
    "text": "Angel C. Alcala is recognized for his research on the ecology and diversity of Philippine:",
    "options": [
      "Fish and marine mammals",
      "Amphibians, reptiles, and marine protected areas",
      "Tropical plants and seaweeds",
      "Insects and soil organisms"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q89",
    "text": "Ramon C. Barba is known for his work in plant physiology, especially the:",
    "options": [
      "Cultivation of seaweeds",
      "Development of erythromycin",
      "Induction of flowering of mango and micropropagation",
      "Conservation of coral reefs"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q90",
    "text": "[TRUE or FALSE] Gavino C. Trono was the first to report the occurrence of \"ice-ice\" disease that affected seaweed farms.",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q91",
    "text": "Edgardo Gomez, Ph.D. is known for being pivotal in:",
    "options": [
      "Inventing micropropagation techniques for crops",
      "The world's first national-scale assessment of damage to coral reefs",
      "Developing anti-pollution engine technology",
      "Discovering a new antibiotic from natural resources"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q92",
    "text": "Emil Q. Javier is recognized for contributions to plant breeding research in crops including rice, maize, sorghum, coconut, and:",
    "options": [
      "Banana and papaya",
      "Abaca and tropical grasses and legumes",
      "Tobacco and sugarcane",
      "Camote and cassava"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q93",
    "text": "The Aerogas Catalytic Combustor (ACC) was invented by:",
    "options": [
      "Engr. Aisa Mijeno",
      "Engr. Marinto C. Martinez",
      "Atoy Llave",
      "Narciso Mosuela"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q94",
    "text": "[TRUE or FALSE] The SALT Lamp runs using just two tablespoons of salt and one glass of tap water.",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q95",
    "text": "The SALT lamp generates electricity through:",
    "options": [
      "Solar panels embedded in the lamp",
      "Chemical compounds, catalysts, and metal alloys submerged in electrolytes",
      "Combustion of biofuel materials",
      "Magnetic induction from saltwater"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q96",
    "text": "The Salamander Amphibious Tricycle was invented by:",
    "options": [
      "Engr. Aisa Mijeno",
      "Narciso Mosuela",
      "Atoy Llave",
      "Diosdado Banatao"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q97",
    "text": "[TRUE or FALSE] The Salamander Amphibious Tricycle can only be powered by an electric engine.",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q98",
    "text": "The SALT Lamp was invented by:",
    "options": [
      "Atoy Llave",
      "Engr. Aisa Mijeno",
      "Engr. Marinto C. Martinez",
      "Fe Del Mundo"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q99",
    "text": "Which of the following BEST describes the Aerogas Catalytic Combustor (ACC)?",
    "options": [
      "A lamp powered by saltwater",
      "A tricycle that travels on land and water",
      "An anti-pollution, eco-friendly fuel saver and power booster engine device",
      "A solar-powered vehicle for urban transport"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q100",
    "text": "[TRUE or FALSE] Science and technology play a significant role in Philippine nation-building by addressing poverty, inequality, and national development.",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q101",
    "text": "B      26. B      51. C      76. B",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q102",
    "text": "C      27. B      52. TRUE   77. B",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q103",
    "text": "B      28. TRUE   53. B      78. B",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q104",
    "text": "C      29. C      54. B      79. FALSE",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q105",
    "text": "D      30. B      55. C      80. C",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q106",
    "text": "FALSE  31. C      56. TRUE   81. B",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q107",
    "text": "B      32. FALSE  57. B      82. C",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q108",
    "text": "TRUE   33. B      58. C      83. TRUE",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q109",
    "text": "C      34. C      59. C      84. B",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q110",
    "text": "B      35. C      60. FALSE  85. B",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q111",
    "text": "B      36. C      61. C      86. C",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q112",
    "text": "C      37. FALSE  62. C      87. FALSE",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q113",
    "text": "B      38. B      63. FALSE  88. B",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q114",
    "text": "TRUE   39. C      64. B      89. C",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q115",
    "text": "C      40. B      65. C      90. FALSE",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q116",
    "text": "B      41. C      66. C      91. B",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q117",
    "text": "C      42. B      67. TRUE   92. B",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q118",
    "text": "D      43. FALSE  68. B      93. B",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q119",
    "text": "FALSE  44. C      69. C      94. TRUE",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q120",
    "text": "C      45. C      70. C      95. B",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q121",
    "text": "B      46. D      71. D      96. C",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q122",
    "text": "B      47. C      72. TRUE   97. FALSE",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q123",
    "text": "TRUE   48. TRUE   73. C      98. B",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q124",
    "text": "B      49. B      74. C      99. C",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  },
  {
    "id": "sts-q125",
    "text": "C      50. C      75. TRUE   100. TRUE",
    "options": [],
    "answer": 0,
    "explanation": "Answers are recorded in the answer key."
  }
]
  }
};
