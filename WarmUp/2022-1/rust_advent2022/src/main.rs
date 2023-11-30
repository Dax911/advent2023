fn main() {
    println!("Hello, world!");
}
// Calories = input

// 1. Read input
fn get_calories_from_txt() => Vec<i32> {
    let mut calories: Vec<i32> = Vec::new();
    let file = File::open("input.txt").expect("File not found");
    let reader = BufReader::new(file);
    for line in reader.lines() {
        let line = line.expect("Could not read line");
        let calorie: i32 = line.parse().expect("Could not parse calorie");
        calories.push(calorie);
    }
    calories
}

// 2. Calculate calories
fn calculate_calories(calories: Vec<i32>) -> i32 {
    let mut total_calories = 0;
    for calorie in calories {
        total_calories += calorie;
    }
    total_calories
}


