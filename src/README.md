**\*What are some differences between interfaces and types in TypeScript?**

TypeScript-এ টাইপ এবং ইন্টারফেস প্রায় সমান কাজ করে, তবে তাদের মধ্যে কিছু
পার্থক্য রয়েছে।

১.এক্সটেনশন (Extending) ইন্টারফেস একাধিক ইন্টারফেস একসাথে এক্সটেন্ড (extend)
করতে পারে। যার মানে একই নামের ইন্টারফেস একাধিকবার ডিফাইন করা সম্ভব এবং
TypeScript তাদের একত্রে মিশিয়ে দেয়।

interface Animal { name: string; }

interface Dog extends Animal { breed: string; }

const myDog: Dog = { name: "Buddy", breed: "Golden Retriever" };

টাইপ একাধিক টাইপ একসাথে মিশাতে পারে, তবে এটি মর্জিং সাপোর্ট করে না। এর মানে হল
যে, যদি একই নামের টাইপ অ্যালিয়াস ঘোষণা করা হয়, তবে তারা ওভাররাইড হয়ে যাবে।

type Animal = { name: string; };

type Dog = Animal & { breed: string };

const myDog: Dog = { name: "Buddy", breed: "Golden Retriever" };

**_Explain the difference between any, unknown, and never types in
TypeScript._**

any টাইপ ব্যবহার করা হয় যখন এটি টাইপস্ক্রিপ্ট কম্পাইলারকে বলে যে এই ভেরিয়েবলের
মান যেকোনো কিছু হতে পারে

উদাহরণ: typescript let data: any = 10; data = "hello"; // বৈধ data.foo();
কম্পাইল হবে, কিন্তু রানটাইমে এরর দিতে পারে

unknown টাইপ unknown টাইপ any টাইপের একটি নিরাপদ বিকল্প। এটি বোঝায় যে
ভেরিয়েবলের মান কী হবে তা আমরা জানি না। any-এর মতো এটিও যেকোনো মান ধারণ করতে
পারে,

উদাহরণ: typescript let data: unknown = 10; data = "hello"; // বৈধ

// data.foo(); // এরর: 'data' হল 'unknown' টাইপের

never টাইপ never টাইপ ব্যবহার করা হয় এমন এক ধরনের মান বোঝাতে যা কখনোই ঘটতে পারে
না বা কখনো শেষ হয় না।
