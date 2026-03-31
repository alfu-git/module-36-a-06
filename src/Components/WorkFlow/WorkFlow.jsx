import React from "react";

const WorkFlow = () => {
  return (
    <section className="container mx-auto px-5 py-30 bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
      <div>
        <div>
          <div className="text-center">
            <h2 className="mb-4 text-base-100 text-[40px] font-extrabold">Ready to Transform Your Workflow?</h2>
            <p className="text-base-100 opacity-90 max-w-150 mx-auto">Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.</p>

            <div className="mt-10 mb-4 flex gap-4 justify-center">
              <button className="btn px-4 h-13 rounded-full shadow-none">
                <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
                  Explore Products
                </span>
              </button>

              <button className="btn px-8.75 h-13 bg-transparent shadow-none border border-base-100 rounded-full text-base-100">
                View Pricing
              </button>
            </div>

            <p className="text-base-100 opacity-80">14-day free trial • No credit card required • Cancel anytime</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkFlow;
