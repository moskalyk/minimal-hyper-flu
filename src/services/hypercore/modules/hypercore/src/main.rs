#![allow(non_snake_case)]
use marine_rs_sdk::marine;
use marine_rs_sdk::module_manifest;

use std::sync::Mutex;
use hypercore::{HypercoreBuilder, Hypercore, Storage, HypercoreError};
use lazy_static::lazy_static;
use random_access_memory::RandomAccessMemory;

lazy_static! {
    static ref HYPERCORE: Mutex<Option<Hypercore<RandomAccessMemory>>> = Mutex::new(None);
}

module_manifest!();

pub fn main() {}

#[marine]
pub fn greeting(name: String) -> String {
    async_std::task::block_on(async {
        format(test().await)
    });
}

async fn test () {

//     let mut hypercore_guard = HYPERCORE.lock().unwrap();

//     *hypercore_guard = Some(
//         HypercoreBuilder::new(Storage::new_memory().await.unwrap())
//             .build()
//             .await
//             .unwrap(),
//     );

//     if let Some(hypercore) = &mut *hypercore_guard {
//         let mut data = Vec::new();

//         hypercore.append(b"a dtn?").await.unwrap();

//         for i in 0.. {
//             let get_result = hypercore.get(i).await;

//             match get_result {
//                 Ok(Some(bytes)) => data.push(format_res(Ok(Some(bytes.clone())))), // Cloning to avoid borrowing issues
//                 Ok(None) => break,
//                 Err(e) => {
//                     eprintln!("Error fetching data: {}", e);
//                     break;
//                 }
//             }
//         }

//         println!("{:#?}", data);
//     }
    println!("{:#?}");
}

// fn main() {
//     async_std::task::block_on(async {
//         test().await;
//     });
// }

// fn format_res(res: Result<Option<Vec<u8>>, HypercoreError>) -> String {
//     match res {
//         Ok(Some(bytes)) => String::from_utf8(bytes).expect("Shouldn't fail in example"),
//         Ok(None) => "Got None in feed".to_string(),
//         Err(e) => format!("Error getting value from feed, reason = {e:?}"),
//     }
// }