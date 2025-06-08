import Image from "next/image";

export default function Home() {
  return (
    
<div className="text-black dark:text-white p-8">
      <h1 className="text-4xl font-bold">Mon Portfolio</h1>
      <p className="mt-4">Ce texte devrait changer de couleur !</p>
      <div className="mt-8 p-4 bg-gray-100 dark:bg-black rounded">
        <p>Cette boîte change aussi de couleur</p>
      </div>
    </div>
    
  );
}
