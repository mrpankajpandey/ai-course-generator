/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    // responseMimeType: "applictaion/json",
    response_mime_type: 'application/json',
  };
  

  export  const GenerateCourseLayoutAI = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
   history: [
    {
      role: "user",
      parts: [
        {text: "Generate A Course Tutorial on Following Detail With field as Course Name, Description, Along with Chapter Name, about, Duration: Category: 'Programming'. Topic: Python, Level:Basic, Duration: 1 hours, NoOf Chapters:5, in JSON format I"},
      ],
    },
    {
      role: "model",
      parts: [
        {text: "```json\n{\n  \"courseName\": \"Python Programming Fundamentals\",\n  \"description\": \"This introductory course provides a comprehensive overview of Python programming, covering the essential concepts and syntax needed to start building your own programs. From basic data types to control flow and functions, you'll gain a solid foundation in Python programming.\",\n  \"chapters\": [\n    {\n      \"name\": \"Introduction to Python\",\n      \"about\": \"Welcome to Python! This chapter introduces the history, benefits, and uses of Python. We'll set up your Python environment and write your first 'Hello, World!' program.\",\n      \"duration\": \"15 minutes\"\n    },\n    {\n      \"name\": \"Data Types and Variables\",\n      \"about\": \"Explore the fundamental data types in Python, including integers, floats, strings, and booleans. Learn how to declare and assign variables to store data.\",\n      \"duration\": \"20 minutes\"\n    },\n    {\n      \"name\": \"Operators and Expressions\",\n      \"about\": \"Discover Python's operators for arithmetic, comparison, logical operations, and more. Understand how to combine operators and variables to form expressions.\",\n      \"duration\": \"25 minutes\"\n    },\n    {\n      \"name\": \"Control Flow: Making Decisions\",\n      \"about\": \"Learn how to control the flow of your program using conditional statements (if, else, elif) and looping constructs (for, while).\",\n      \"duration\": \"15 minutes\"\n    },\n    {\n      \"name\": \"Functions: Building Reusable Code\",\n      \"about\": \"Dive into functions, which allow you to break down your code into modular, reusable blocks. Understand function definitions, parameters, and return values.\",\n      \"duration\": \"15 minutes\"\n    }\n  ],\n  \"category\": \"Programming\",\n  \"topic\": \"Python\",\n  \"level\": \"Basic\",\n  \"duration\": \"1 hour\",\n  \"noOfChapters\": 5\n}\n```"},
      ],
    },
  ],
});

  
    // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    // console.log(result.response.text());
 

    export const GenerateChapterContent_AI = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
        {
          role: "user",
          parts: [
            {text: "Explain the concept in Detail on Topic: Python, Chapter:Object-Oriented Programming (OOP), in JSON Format with list of array with field as title, description in detail, Code Example(Code filed in <precode> formt) if applicable"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n[\n  {\n    \"title\": \"What is Object-Oriented Programming (OOP)?\",\n    \"description\": \"Object-Oriented Programming (OOP) is a programming paradigm that organizes code around objects rather than actions or logic. Objects are data structures that combine data (attributes) and methods (functions) that operate on that data. OOP emphasizes modularity, reusability, and data encapsulation.\",\n    \"codeExample\": \"\"\n  },\n  {\n    \"title\": \"Key Concepts in OOP\",\n    \"description\": \"OOP revolves around several fundamental concepts:\",\n    \"codeExample\": \"\"\n  },\n  {\n    \"title\": \"Classes\",\n    \"description\": \"Classes are blueprints for creating objects. They define the attributes and methods that objects of that class will have. A class acts as a template.\",\n    \"codeExample\": \"<precode>\\nclass Dog:\\n    def __init__(self, name, breed):\\n        self.name = name\\n        self.breed = breed\\n    def bark(self):\\n        print('Woof!')\\n</precode>\"\n  },\n  {\n    \"title\": \"Objects\",\n    \"description\": \"Objects are instances of classes. They are created from the class blueprint and contain specific values for their attributes.\",\n    \"codeExample\": \"<precode>\\nmy_dog = Dog('Buddy', 'Golden Retriever')\\n</precode>\"\n  },\n  {\n    \"title\": \"Attributes\",\n    \"description\": \"Attributes are the variables that hold data within an object. They represent the object's characteristics.\",\n    \"codeExample\": \"<precode>\\nmy_dog.name # 'Buddy'\\nmy_dog.breed # 'Golden Retriever'\\n</precode>\"\n  },\n  {\n    \"title\": \"Methods\",\n    \"description\": \"Methods are functions associated with a class that define the object's behavior. They operate on the object's data.\",\n    \"codeExample\": \"<precode>\\nmy_dog.bark() # Output: 'Woof!'\\n</precode>\"\n  },\n  {\n    \"title\": \"Encapsulation\",\n    \"description\": \"Encapsulation involves bundling data (attributes) and methods within a class, restricting access to the data from outside the class. This promotes data security and modularity.\",\n    \"codeExample\": \"<precode>\\nclass BankAccount:\\n    def __init__(self, balance):\\n        self.__balance = balance # Encapsulated attribute\\n    def deposit(self, amount):\\n        self.__balance += amount\\n    def withdraw(self, amount):\\n        if self.__balance >= amount:\\n            self.__balance -= amount\\n        else:\\n            print('Insufficient funds.')\\n    def get_balance(self):\\n        return self.__balance\\n</precode>\"\n  },\n  {\n    \"title\": \"Inheritance\",\n    \"description\": \"Inheritance allows creating new classes (child classes) that inherit properties and methods from existing classes (parent classes). This promotes code reusability and creates a hierarchy of classes.\",\n    \"codeExample\": \"<precode>\\nclass Animal:\\n    def __init__(self, name):\\n        self.name = name\\n    def speak(self):\\n        print('Generic animal sound')\\n\\nclass Dog(Animal):\\n    def speak(self):\\n        print('Woof!')\\n\\nclass Cat(Animal):\\n    def speak(self):\\n        print('Meow!')\\n\\nmy_dog = Dog('Buddy')\\nmy_cat = Cat('Whiskers')\\nmy_dog.speak() # Output: 'Woof!'\\nmy_cat.speak() # Output: 'Meow!'\\n</precode>\"\n  },\n  {\n    \"title\": \"Polymorphism\",\n    \"description\": \"Polymorphism means \\\"many forms.\\\" In OOP, it allows objects of different classes to be treated in the same way through a common interface. This allows for flexibility and code that can handle diverse objects.\",\n    \"codeExample\": \"<precode>\\ndef make_sound(animal):\\n    animal.speak()\\n\\nmy_dog = Dog('Buddy')\\nmy_cat = Cat('Whiskers')\\nmake_sound(my_dog) # Output: 'Woof!'\\nmake_sound(my_cat) # Output: 'Meow!'\\n</precode>\"\n  },\n  {\n    \"title\": \"Abstraction\",\n    \"description\": \"Abstraction simplifies complex systems by hiding unnecessary details and exposing only the essential features. Abstract classes and interfaces are used to define common behaviors without implementing them.\",\n    \"codeExample\": \"<precode>\\nfrom abc import ABC, abstractmethod\\n\\nclass Shape(ABC):\\n    @abstractmethod\\n    def area(self):\\n        pass\\n\\nclass Rectangle(Shape):\\n    def __init__(self, length, width):\\n        self.length = length\\n        self.width = width\\n    def area(self):\\n        return self.length * self.width\\n\\nclass Circle(Shape):\\n    def __init__(self, radius):\\n        self.radius = radius\\n    def area(self):\\n        return 3.14159 * self.radius * self.radius\\n\\nrect = Rectangle(5, 3)\\ncircle = Circle(4)\\nprint(f'Rectangle area: {rect.area()}')\\nprint(f'Circle area: {circle.area()}')\\n</precode>\"\n  },\n  {\n    \"title\": \"Benefits of OOP\",\n    \"description\": \"OOP offers numerous benefits, including:\",\n    \"codeExample\": \"\"\n  },\n  {\n    \"title\": \"Modularity\",\n    \"description\": \"OOP encourages breaking down programs into smaller, independent units (objects), making code easier to manage and maintain.\",\n    \"codeExample\": \"\"\n  },\n  {\n    \"title\": \"Reusability\",\n    \"description\": \"Classes can be reused in different parts of the program or in other projects, reducing code duplication and development time.\",\n    \"codeExample\": \"\"\n  },\n  {\n    \"title\": \"Maintainability\",\n    \"description\": \"OOP promotes well-organized code, making it easier to understand, debug, and modify.\",\n    \"codeExample\": \"\"\n  },\n  {\n    \"title\": \"Data Security\",\n    \"description\": \"Encapsulation protects data within objects from unauthorized access, enhancing data integrity.\",\n    \"codeExample\": \"\"\n  },\n  {\n    \"title\": \"Extensibility\",\n    \"description\": \"Inheritance allows extending existing functionality, making it easier to adapt and expand codebases.\",\n    \"codeExample\": \"\"\n  }\n]\n```"},
          ],
        },
      ],
    });
  