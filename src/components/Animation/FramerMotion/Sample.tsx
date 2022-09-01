import { motion, AnimatePresence } from 'framer-motion';

const Sample = ({ isVisible }: any) => {
  let animationContext = {};
  // animationContext = { opacity: isVisible ? 1 : 0 };
  animationContext = { x: isVisible ? 100 : 0 };

  console.log(animationContext);

  const listParentVariant = {
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: 'afterChildren',
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    },
  };

  const listItemVariant = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -200 },
    // exit: { opacity: 0, x: -200 },
  };

  // const secondVariants = {
  //   visible: (i: any) => ({
  //     opacity: 1,
  //     transition: {
  //       delay: i * 0.3,
  //     },
  //   }),
  //   hidden: { opacity: 0 },
  // };

  return (
    <div className="text-center">
      <h4>Sample Component</h4>
      <div className="w-2/3 mx-auto">
        <AnimatePresence key="first">
          {(isVisible || true) && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
            >
              <h2 className="bg-red-300 text-3xl p-5 my-5">This is Going to HIDE</h2>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <motion.div
        className="w-max mx-auto my-5 bg-purple-500 text-white py-2 px-5"
        // animate={animationContext}

        whileHover={{ scale: 1.4 }}
        whileTap={{ scale: 1.1 }}
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}

        // animate={{ x: 100 }}
        // transition={{ ease: 'easeOut', duration: 2 }}

        // animate={{ x: 100 }}
        // initial={false}

        // animate={{
        //   scale: [1, 2, 2, 1, 1],
        //   rotate: [0, 0, 180, 180, 0],
        //   // borderRadius: ['0%', '0%', '50%', '50%', '0%'],
        // }}
        // // animate={{ x: [0, 100, 0] }}
        // transition={{
        //   duration: 2,
        //   ease: 'easeInOut',
        //   times: [0, 0.2, 0.5, 0.8, 1],
        //   repeat: Infinity,
        //   repeatDelay: 1,
        // }}

        /**
         * Setting the initial keyframe to "null" will use
         * the current value to allow for interruptable keyframes.
         */
        // whileHover={{ scale: [null, 1.5, 1.4] }}
        // transition={{ duration: 0.3 }}
      >
        Text To Hide OR Slide IT (left to right)
      </motion.div>
      <br />

      {/* First List */}
      <AnimatePresence key="second">
        {isVisible && (
          <motion.ul
            initial="hidden"
            animate="visible"
            // exit={{ opacity: 0, scale: 0 }}
            exit="hidden"
            variants={listParentVariant}
            className="mx-auto"
          >
            {['First', 'Second', 'Third'].map((item, index) => (
              <motion.li
                className="bg-blue-600 text-white px-5 py-3 my-3 w-1/2 mx-auto"
                variants={listItemVariant}
                key={index}
              >
                {index + 1} === {item}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      <br />

      {/* Second List - start */}
      {/* {[1, 2, 3, 4].map((item, i) => (
        <motion.li key={i} custom={i} animate="visible" variants={secondVariants}>
          Item {i}
        </motion.li>
      ))} */}
      {/* Second List - end */}

      {/* <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum ex nostrum assumenda
        laudantium natus, eius vel provident ea blanditiis perspiciatis at ut modi vitae quibusdam
        praesentium illo, ad itaque aperiam maxime! Nesciunt quis omnis facere mollitia itaque nisi
        corrupti eaque rem qui odit distinctio quibusdam iste odio deleniti obcaecati, veniam
        cupiditate voluptatum aut laboriosam soluta incidunt. Incidunt ducimus distinctio sed vero!
        Commodi, reiciendis quas eaque a incidunt aperiam tempora. Ratione fuga, vel commodi magnam
        adipisci quas neque nemo rerum optio cum eum asperiores rem accusantium veniam impedit
        dolorem a est mollitia omnis ipsam laborum, illum repellendus. Fugiat exercitationem amet
        voluptas, ducimus excepturi dignissimos inventore laudantium. Nemo, dicta doloribus ad ullam
        atque temporibus adipisci similique? In cupiditate corporis dignissimos nihil nemo eum dolor
        perferendis excepturi unde optio exercitationem est, laudantium nam ipsum. Perspiciatis
        maxime libero commodi animi tempora quod dolorum debitis nobis exercitationem magni sed
        corrupti pariatur odio excepturi atque facilis, voluptatum facere quibusdam repudiandae
        temporibus dolore nesciunt? Corporis repellendus similique, voluptatum eveniet sit dicta
        illum explicabo, eum reprehenderit repudiandae incidunt magnam! Aspernatur aliquid quia
        praesentium adipisci, possimus officiis optio, atque blanditiis quo sapiente est hic eum at
        sint quaerat voluptas ea eius. Aliquam quasi commodi error totam perferendis, libero saepe,
        eligendi dicta dignissimos similique eos eveniet porro! Id dolorum, placeat veniam enim
        tempora rem voluptates distinctio aliquam nam, illo sed. Ex suscipit quas earum pariatur
        ratione hic optio enim in aspernatur eligendi, dicta minima aliquid praesentium molestias
        deserunt sunt beatae perspiciatis provident dignissimos consequuntur modi amet vel? At,
        voluptatibus atque eaque explicabo qui sed magnam doloremque. Facilis eveniet, aperiam aut
        veniam atque temporibus eaque ipsa. Aut, facere. Molestiae consectetur voluptas explicabo
        architecto laudantium odio amet facere aspernatur eos voluptates, autem distinctio rem
        eveniet vitae eaque natus atque aut. Suscipit veritatis sapiente laborum fugiat repellat
        sunt facilis distinctio ab nulla reprehenderit. Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Sequi mollitia id, aut sapiente repudiandae ab eveniet, nemo debitis quod
        iusto quaerat. Quibusdam, asperiores accusantium dolorum sint aperiam quas, inventore eos
        ratione, eveniet modi ullam quod! Vero quisquam nemo soluta animi optio nam minima! Quae,
        doloremque. Ad vero magnam recusandae dolor eligendi neque quis dolorem dolore voluptatibus
        illo sit debitis, quod autem vel odio sed natus, pariatur ratione unde necessitatibus,
        molestias blanditiis. In quo autem nostrum vitae et a blanditiis adipisci natus illo, beatae
        fugiat numquam quod perspiciatis assumenda magnam cum quas cupiditate. Ullam ipsa eos
        possimus accusantium, natus optio cum, vitae molestiae porro dignissimos autem doloremque
        odit impedit veniam sint nisi dolorem expedita placeat? Exercitationem itaque suscipit quas
        quis laboriosam molestias quam. Rem debitis accusamus libero temporibus similique numquam et
        magnam perferendis, ab earum dolore. Fugit asperiores accusamus minima consectetur fugiat
        perspiciatis laborum, molestias hic quam assumenda nisi, vel tempore ad? Error sint cumque
        veniam nostrum? Voluptas voluptate iusto, eligendi voluptatum maiores minima nihil autem at
        ullam dolorem, necessitatibus aspernatur aliquid qui est ea illo cumque accusamus
        consequuntur facere. Cum expedita ducimus recusandae? Enim modi tempore labore ex
        consequatur, quam esse dolorem hic at, magni ad cumque deserunt velit accusamus voluptas
        inventore reiciendis eaque officia dicta culpa iure corporis ducimus. Quia, suscipit
        pariatur. Illo, accusantium sed reiciendis obcaecati qui a hic harum, nisi consequatur ab
        vel repellat. Commodi, ipsam! Autem perspiciatis exercitationem, animi delectus quis, nam
        iure mollitia unde quas dolorem, quidem sapiente? Quibusdam saepe sint sit iusto numquam
        distinctio rerum harum magnam maiores vero maxime fugit, eos ut autem excepturi iure dolores
        quisquam modi sapiente perspiciatis quae voluptatibus! Blanditiis ab cum quibusdam commodi
        numquam repellendus, et quos amet sint, molestiae voluptatum vero veritatis reiciendis
        voluptas, accusantium alias! Nihil ipsam possimus culpa excepturi, quod eius incidunt sint
        ducimus dicta, repellat in eligendi? Vel at dolorum hic recusandae, asperiores quibusdam
        voluptas similique, ratione quis consequatur eveniet. Ratione minus aliquam cupiditate non,
        quas vero rerum quos. Explicabo, eius? Adipisci sunt similique hic suscipit minus quam ipsa
        dolorum accusamus illum. Nisi similique earum unde consectetur animi, harum perferendis
        dignissimos! Harum, tenetur. Provident aperiam pariatur officia asperiores aut, illo fugiat,
        libero exercitationem illum quae facere atque repellendus consequatur voluptatum tempore
        delectus ducimus porro ratione ea possimus consectetur laboriosam, quasi aspernatur! Earum
        adipisci animi, rem maxime deserunt commodi ex consectetur necessitatibus nesciunt dolore
        veniam porro quae, beatae at placeat exercitationem nihil quisquam. Repellat, excepturi
        rerum.
      </div> */}
      {/* <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <b>There is some Data shown while scrolling</b>
      </motion.div> */}
      {/* <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum nemo repellat mollitia sunt,
        ipsam ab assumenda exercitationem sint ratione ea cumque ducimus esse distinctio in tempore
        praesentium cupiditate animi soluta impedit, quam sed deleniti modi dolores. Distinctio
        voluptate quae quaerat iste neque quis. Deleniti, ratione aperiam necessitatibus aspernatur
        cum sed consequatur ullam, dicta at ab veniam, ea rem eligendi exercitationem ipsum
        perspiciatis? Porro facilis dignissimos fugiat ab minus minima accusantium quas debitis
        ipsum, error eligendi quaerat provident vel facere tempora aliquid nam ducimus in quod!
        Laudantium consectetur reprehenderit eos, quibusdam consequatur placeat, voluptate vel
        tempora odit dolore ut in sed.
      </div> */}
    </div>
  );
};

export default Sample;
