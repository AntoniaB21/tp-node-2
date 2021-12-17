export default function sortedArray(){
    const randomValues = Array.from({length: 4}, () => Math.floor(Math.random() * 10));
    return randomValues.sort();
}