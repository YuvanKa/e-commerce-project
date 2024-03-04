#include <iostream>
using namespace std;

int main() {
    int A, B;
    cin >> A >> B;

    // Printing the interlaced sequence
    int even = B % 2 == 0 ? B : B - 1;
    int odd = A % 2 == 0 ? A : A + 1;
    
    while (odd <= even) {
        cout << odd << " ";
        cout << even << " ";
        odd += 2;
        even -= 2;
    }

    return 0;
}
